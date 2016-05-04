<template>

  <div class="x-date-time-picker-container" :style="style">

    <div class="x-date-picker-tool" v-show="showing === 'date'">
      <a href="#" class="last-month" @click.prevent="lastMonth">
        <chevron-left></chevron-left>
      </a>
      <a href="#" class="year-month" @click.prevent="selectMonth">{{control.year + '年' + (control.month + 1) + '月'}}</a>
      <a href="#" class="next-month" @click.prevent="nextMonth">
        <chevron-right></chevron-right>
      </a>
    </div>

    <div class="x-date-picker-tool" v-show="showing === 'month'">
      <a href="#" class="last-month" @click.prevent="lastYear">
        <chevron-left></chevron-left>
      </a>
      <a href="#" class="year-month" @click.prevent="selectYear">{{control.year + '年'}}</a>
      <a href="#" class="next-month" @click.prevent="nextYear">
        <chevron-right></chevron-right>
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
                  v-show="showing === 'month'"></month-picker>

  </div>

</template>

<style lang="sass" rel="stylesheet/scss">
  .x-date-time-picker-container{
    position: absolute;
    box-sizing: content-box;
    width : 207px;
    padding : 10px;
    border: 1px solid #dedede;
    background-color: #ffffff;
  }
</style>

<script type="text/babel">
  import datePicker from './date-picker.vue'

//  import timePicker from './time-picker.vue'
  import monthPicker from './month-picker.vue'
//  import yearPicker from './year-picker.vue'

  import chevronLeft from '../svg-icon/chevron-left.vue'
  import chevronRight from '../svg-icon/chevron-right.vue'

  const today = new Date()
  function updateControl(control, date) {
    if (typeof date !== Date) date = new Date
    control.year = date.getFullYear()
    control.month = date.getMonth()
    control.date = date.getDate()
    control.hour = date.getHours()
    control.minute = date.getMinutes()
    control.second = date.getSeconds()
  }

  export default {
    props: {
      rect: {},
      onChange: {
        type: Function,
        default: function () {}
      },
      highlightToday: {
        type: Boolean,
        default: true
      },
      value: {
        type: Number
      }
    },
    components: {
      chevronLeft,
      chevronRight,
      datePicker,

//      timePicker,
      monthPicker,
//      yearPicker
    },

    data() {
      return {
        showing: 'date',
        control: {
          year: 0,
          month: 0,
          date: 0,
          hour: 0,
          minute: 0,
          second: 0
        }
      }
    },

    ready() {

      let date = this.value || today

      if (typeof date !== Date) {
        date = new Date(date)
      }

      updateControl(this.control, date)

//      this.dateArray = this.makeDateArray()

      // 监听value的值得变化,如果改变判断年月是否相同,不同则改变control的值
      this._unWatchValue = this.$watch('value', (newVal) => {
        let date = new Date(newVal)
        updateControl(this.control, date)
      })

    },

    computed: {
      style() {
        return {
          left: this.rect.left + 'px',
          top: this.rect.top + this.rect.height + 'px'
        }
      }
    },

    methods: {
      // 父组件可以通过该方法获取日期时间的值
      getValue() {

      },
      /**
       * 在选择器上选择上个月
       */
      lastMonth() {
        let month = this.control.month
        if (month === 0) {
          this.control.year = this.control.year - 1
          this.control.month = 11
        } else {
          this.control.month = month - 1
        }
      },

      /**
       * 在选择器上选择下个月
       */
      nextMonth() {
        let month = this.control.month
        if (month === 11) {
          this.control.year = this.control.year + 1
          this.control.month = 0
        } else {
          this.control.month = month + 1
        }
      },

      lastYear() {
        this.control.year--
      },
      nextYear() {
        this.control.year++
      },

      selectMonth() {
        // 将视图转换成month-picker
        this.showing = 'month'
      },

      selectYear() {
        // 将视图转换为year-picker
      },

      dateChange(value) {
        this.onChange(value)
      }
    }

  }
</script>
