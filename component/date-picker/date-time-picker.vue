<template>

  <div class="x-date-time-picker-container" :style="styl">
    <div class="container-fluid">
      <div v-if="isDateEnabled && isTimeEnabled" class="x-date-picker-modes row">
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
      <div class="x-date-picker-tool">
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
                   :control="control"
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
      const updateControl = (date) => {
        if (date instanceof Date) date = new Date(date)
        this.year = date.getFullYear()
        this.month = date.getMonth()
        this.date = date.getDate()
        this.hour = date.getHours()
        this.minute = date.getMinutes()
        this.second = date.getSeconds()
      }

      let date = this.value || today

      if (typeof date !== Date) {
        date = new Date(date)
      }

      updateControl(date)
      // 监听value的值得变化,如果改变判断年月是否相同,不同则改变control的值
      this._unWatchValue = this.$watch('value', (newVal) => {
        let date = new Date(newVal)
        if (!isNaN(date.getTime())) updateControl(date)
      })

    },

    computed: {
      styl () {
        return {
          left: this.rect.left + 'px',
          top: this.rect.top + this.rect.height + 'px',
          width: !this.isDateEnabled && 'auto'
        }
      },
      control() {
        let { year, month, date, hour, minute, second, minDate, maxDate, startDate, endDate } = this
        if (minDate === -1 && startDate === -1) minDate = -1
        else if (minDate === -1) minDate = startDate
        else if (startDate === -1) minDate = minDate
        else minDate = minDate < startDate ? minDate : startDate

        if (maxDate === -1 && endDate === -1) maxDate = -1
        else if (maxDate === -1) maxDate = endDate
        else if (endDate === -1) maxDate = maxDate
        else maxDate = maxDate > endDate ? maxDate : endDate
        let valueDate
        if (!this.value) {
          valueDate = null
        } else {
          let d = new Date(this.value)
          valueDate = {
            year: d.getFullYear(),
            month: d.getMonth(),
            date: d.getDate(),
            hour: d.getHours(),
            minute: d.getMinutes(),
            seconds: d.getSeconds()
          }
        }
        return {
          year, month, date, hour, minute, second, minDate, maxDate, valueDate
        }
      },
      chosenDateTime () {
        // 用于处理上下调整时间。。。比较麻烦
      }
    },

    methods: {
      toggleMode (mode) {
        this.currentMode = mode
      },
      // 父组件可以通过该方法获取日期时间的值
      getValue() {

      },
      /**
       * 在选择器上选择上个月
       */
      lastMonth() {
        let month = this.month
        if (month === 0) {
          this.year = this.year - 1
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
      dateChange (date) {
        let newDate = new Date(date)
        // 变化的是年月日,把原来的时分秒设置进去
        newDate.setHours(this.hour)
        newDate.setMinutes(this.minute)
        newDate.setSeconds(this.second)
        this.onChange(newDate)
      },
      // 时间变化事件
      timeChange (hour, minute, second) {
        let timeDate = new Date()
        // 变化的是时分秒,把原来的年月日设置进去
        timeDate.setFullYear(this.year)
        timeDate.setMonth(this.month)
        timeDate.setDate(this.date)
        timeDate.setHours(hour)
        timeDate.setMinutes(minute)
        timeDate.setSeconds(second)
        // 必须设置毫秒, 否则range边界时间与选择的时间比较会出错
        timeDate.setMilliseconds(0)
        // todo 如果是时分秒的blur, 需要重置到最小/大允许值
        if (this.control.minDate > -1 && this.control.minDate >= +timeDate) {
//          console.log('chosen time:', +timeDate, 'is smaller or equal than startDate:', this.startDate, '.refused')
          return
        }
        if (this.control.maxDate > -1 && this.control.maxDate <= +timeDate) {
//          console.log('chosen time:', +timeDate, 'is bigger or equal than endDate:', this.endDate, '.refused')
          return
        }
        this.onChange(timeDate)
      },
      onAllComplete () {
        this.onComplete(this.value)
      },
    }

  }
</script>
