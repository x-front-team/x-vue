<template>

  <div class="v-date-time-picker-container" :style="styl">
    <div class="container-fluid">
      <div v-if="isDateEnabled && isTimeEnabled" class="v-date-picker-modes row">
        <div class="col-xs-6 text-xs-center picker-tab"
             @click.prevent="toggleMode('DATE')">
          <a href="javascript:void(0)"
             :class="{ 'active': currentMode === 'DATE' }"><event-note></event-note> 日期</a>
        </div>
        <div class="col-xs-6 text-xs-center picker-tab"
             @click.prevent="toggleMode('TIME')">
          <a href="javascript:void(0)"
             :class="{ 'active': currentMode === 'TIME' }"><av-time></av-time> 时间</a>
        </div>
      </div>
    </div>
    <div v-show="currentMode === 'DATE'">
      <div class="v-date-picker-tool">
        <a href="#" class="last-year" @click.prevent="lastYear" v-show="showing === 'date' || showing === 'month'">
          <arrow-back size="14"></arrow-back>
        </a>
        <a href="#" class="last-month" @click.prevent="lastMonth" v-show="showing === 'date'">
          <chevron-left size="14"></chevron-left>
        </a>
        <a href="#" class="year-month control-panel" @click.prevent="selectMonth" v-show="showing === 'date'">
          {{control.year + '年' + (control.month + 1) + '月'}}
        </a>
        <a href="#" class="year-month control-panel" @click.prevent="selectYear" v-show="showing === 'month'">
          {{control.year + '年'}}
        </a>
        <a class="year-month control-panel" v-show="showing === 'year'">
          {{control.year + '年'}}
        </a>
        <a href="#" class="next-month" @click.prevent="nextMonth" v-show="showing === 'date'">
          <chevron-right size="14"></chevron-right>
        </a>
        <a href="#" class="next-year" @click.prevent="nextYear" v-show="showing === 'date' || showing === 'month'">
          <arrow-forward size="14"></arrow-forward>
        </a>
      </div>

      <date-picker :on-change="dateChange"
                   :select-month="selectMonth"
                   v-show="showing === 'date'"
                   :value="value"
                   :control="control"
                   :highlight-today="highlightToday"></date-picker>

      <month-picker :select-year="selectYear"
                    :value="value"
                    :on-change="monthChange"
                    :control="control"
                    v-show="showing === 'month'"></month-picker>

      <year-picker :control="control"
                   v-show="showing === 'year'"
                   :on-change="yearChange"></year-picker>
    </div>
    <div v-show="currentMode === 'TIME'">
      <time-picker :select-time="selectTime"
                   :control="selected"
                   :min-date="realMinDate"
                   :max-date="realMaxDate"
                   :is-second-enabled="isSecondEnabled"
                   :on-change="timeChange"></time-picker>
    </div>
  <button class="btn btn-primary btn-sm btn-block done" @click="onAllComplete">
    确定
  </button>
  </div>

</template>

<script type="text/babel">
  import datePicker from './date-picker.vue'
  import timePicker from './time-picker.vue'
  import monthPicker from './month-picker.vue'
  import yearPicker from './year-picker.vue'

  import chevronLeft from '../svg-icon/chevron-left.vue'
  import chevronRight from '../svg-icon/chevron-right.vue'
  import arrowBack from '../svg-icon/arrow-back.vue'
  import arrowForward from '../svg-icon/arrow-forward.vue'
  import eventNote from '../svg-icon/event-note.vue'
  import avTime from '../svg-icon/av-time.vue'

  const today = new Date()

  export default {
    props: {
      rect: {},
      onChange: {
        type: Function,
        default: function () {}
      },
      onComplete: {
        type: Function,
        default: function () {}
      },
      highlightToday: {
        type: Boolean,
        default: true
      },
      value: {
        type: Number
      },
      startDate: {
        type: Number,
        default: -1
      },
      endDate: {
        type: Number,
        default: -1
      },
      minDate: {
        type: Number,
        default: -1
      },
      maxDate: {
        type: Number,
        default: -1
      },
      format: {
        type: String,
        default: 'yyyy-MM-dd'
      },
      align: {
        type: String,
        default: 'left'
      }
    },
    components: {
      chevronLeft,
      chevronRight,
      arrowBack,
      arrowForward,
      eventNote,
      avTime,
      datePicker,

      timePicker,
      monthPicker,
      yearPicker,
    },

    data() {
      // 是否开启日期选择模式
      let isDateEnabled = /yyyy|MM|dd/.test(this.format)
      // 是否开启了时间选择模式
      let isTimeEnabled = /hh|mm|ss/.test(this.format)
      return {
        currentMode: isDateEnabled ? 'DATE' : 'TIME',
        showing: 'date',
        selected: {},

        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,

        isDateEnabled,
        isTimeEnabled,
        // 是否显示秒
        isSecondEnabled: /ss/.test(this.format),
      }
    },

    ready() {
      let date = this.value < 1 ? today : this.value

      this.updateSelected(date)
      this.updateValue(date)
    },

    watch: {
      value(val) {
        if (!val || (typeof val === 'number' && val < 1)) {
          let date = new Date()
          this.updateSelected(date)
          this.updateValue(date)
          return
        }
        let date = new Date(val)
        if (!isNaN(date.getTime())) {
          this.updateSelected(val)
          this.updateValue(val)
        }
      },
      realMinDate() {
        this.makeSelectedValidate()
      },
      realMaxDate() {
        this.makeSelectedValidate()
      },
      selected: {
        handler() {
          this.makeSelectedValidate()
        },
        deep: true
      }
    },

    computed: {
      styl () {
        let style = {
          top: this.rect.top + this.rect.height + 'px',
          width: !this.isDateEnabled && 'auto'
        }
        if (this.align === 'right') {
          style.right = document.body.clientWidth - this.rect.right + 'px'
        } else {
          style.left = this.rect.left + 'px'
        }
        return style
      },
      control() {
        let { year, month, date, hour, minute, second } = this

        return {
          year, month, date, hour, minute, second,
          minDate: this.realMinDate,
          maxDate: this.realMaxDate,
          valueDate: this.selected
        }
      },
      realMinDate() {
        let { minDate, startDate } = this
        if (minDate === -1 && startDate === -1) minDate = -1
        else if (minDate === -1) minDate = startDate
        else if (startDate === -1) {}
        else minDate = minDate < startDate ? minDate : startDate
        return minDate
      },
      realMaxDate() {
        let { maxDate, endDate } = this
        if (maxDate === -1 && endDate === -1) maxDate = -1
        else if (maxDate === -1) maxDate = endDate
        else if (endDate === -1) {}
        else maxDate = maxDate > endDate ? maxDate : endDate
        return maxDate
      },
      selectedTime() {
        let { year, month, date, hour, minute, second } = this.selected
        console.log(this.selected)
        return new Date(year, month, date, hour, minute, second).getTime()
      }
    },

    methods: {
      toggleMode (mode) {
        this.currentMode = mode
      },

      updateValue (val) {
        let date = new Date(val)
        if (!isNaN(date.getTime())) {
          this.year = date.getFullYear()
          this.month = date.getMonth()
          this.date = date.getDate()
          this.hour = date.getHours()
          this.minute = date.getMinutes()
          this.second = date.getSeconds()
        }
      },

      // 一旦选中日期或者最小最大日期变化,则检查是否符合最大最小日期
      // 如果不符合,更新成最大最小之一
      makeSelectedValidate() {
        if (this.realMinDate !== -1 && this.selectedTime < this.realMinDate) {
          this.updateSelected(this.realMinDate)
        }
        if (this.realMaxDate !== -1 && this.selectedTime > this.realMaxDate) {
          this.updateSelected(this.realMaxDate)
        }
      },

      updateSelected(value) {
//        debugger
        let date
        if (value) {
          date = new Date(value)
          this.selected = {
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
          }
        } else {
          this.selected = {
            year: this.year,
            month: this.month,
            date: this.date,
            hour: this.hour,
            minute: this.minute,
            second: this.second
          }
        }
      },

      /**
       * 在选择器上选择上个月
       */
      lastMonth() {
        let month = this.month
        if (month === 0) {
          this.second = this.year - 1
          this.month = 11
        } else {
          this.month = month - 1
        }
      },

      /**
       * 在选择器上选择下个月
       */
      nextMonth() {
        let month = this.month
        if (month === 11) {
          this.year = this.year + 1
          this.month = 0
        } else {
          this.month = month + 1
        }
      },

      lastYear() {
        this.year--
      },
      nextYear() {
        this.year++
      },

      selectMonth() {
        // 将视图转换成month-picker
        this.showing = 'month'
      },

      selectYear() {
        // 将视图转换为year-picker
        this.showing = 'year'
      },

      monthChange(month) {
        // 需要判断当前选择器是否到月为止,如果是则触发onChange
        this.month = month
        this.showing = 'date'
      },

      yearChange(year) {
        this.year = year
        this.showing = 'month'
      },
      // 日期变化时间
      dateChange (year, month, date) {
        this.selected.year = year
        this.selected.month = month
        this.selected.date = date
//        this.makeSelectedValidate()
      },
      // 时间变化事件
      timeChange (hour, minute, second) {
        this.selected.hour = hour
        this.selected.minute = minute
        this.selected.second = second
      },
      onAllComplete () {
//        let { year, month, date, hour, minute, second } = this.selected
        this.onChange(this.selectedTime)
      }
    }
  }
</script>
