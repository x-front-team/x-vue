<template>

  <div class="x-date-picker">

    <div class="x-date-picker-tool">
      <a href="#" class="last-month" @click.prevent="lastMonth">
        <chevron-left></chevron-left>
      </a>
      <a href="#">{{control.year + '年' + (control.month + 1) + '月'}}</a>
      <a href="#" class="next0month" @click.prevent="nextMonth">
        <chevron-right></chevron-right>
      </a>
    </div>

    <table class="x-date-picker-table">
      <thead>
      <tr>
        <th v-for="w in weekArray">
          {{weeks[w]}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="arr in dateArray" track-by="$index">
        <td v-for="date in arr" track-by="$index">
          <a href="#" @click="choose($event, date)"
             :class="{'date-picker-cell': true,
             'not-this-month': !date.isThisMonth,
             'today': highlightToday && date.isToday,
             'selected': date.selected,
             'disabled': date.disabled}">{{date.day}}</a>
        </td>
      </tr>
      </tbody>
    </table>

  </div>

</template>

<script type="text/babel">

  import chevronLeft from '../svg-icon/chevron-left.vue'
  import chevronRight from '../svg-icon/chevron-right.vue'

  import XButton from '../button/button.vue'

  import { getNormalDateArray, getFirstDateArrayLength, fillDateArray } from './util'

  // use this today for default value or today value
  const today = new Date()

  export default {

    props: {
      weekArray: {
        type: Array,
        default: function () {
          return [0, 1, 2, 3, 4, 5, 6]
        }
      },
      defaultDate: {
        type: Date,
        default: function () {
          return today
        }
      },
      // use .sync bind to make value two-way
      value: {
        type: Date,
        default: function () {
          return today
        }
      },
      onChange: {
        type: Function,
        default: function () {}
      },
      highlightToday: {
        type: Boolean,
        default: true
      }
    },

    components: {
      XButton,
      chevronLeft,
      chevronRight
    },

    data() {
      return {
        dateArray: [],
        control: {
          year: 0,
          month: 0,
          date: 0
        },
        today: today,
        weeks: {
          0: '天',
          1: '一',
          2: '二',
          3: '三',
          4: '四',
          5: '五',
          6: '六'
        }
      }
    },

    ready() {
      let date = this.value || this.defaultDate || this.today
      this.control.year = date.getFullYear()
      this.control.month = date.getMonth()
      this.control.date = date.getDate()

      this.dateArray = this.makeDateArray()

      // 监听value的值得变化,如果改变判断年月是否相同,不同则改变control的值
      this._unWatchValue = this.$watch('value', (newVal) => {
        if (newVal.getFullYear() !== this.control.year || newVal.getMonth() !== this.control.month) {
          this.control.year = newVal.getFullYear()
          this.control.month = newVal.getMonth()
          this.control.date = newVal.getDate()
        }
      })

      // control作为组件内部的控制器,大部分时候跟value相同,只有在翻页的时候回不一样
      this._unWatchControl = this.$watch('control', () => {
        this.dateArray = this.makeDateArray()
      }, { deep: true })

      // 这里应该添加对defaultDate等的值变化的watcher,有变化就重新生成dateArray
    },

    beforeDestroy() {
      this._unWatchControl()
      this._unWatchValue()
    },

    methods: {
      /**
       * 选择一个日期
       * 赋值给value
       * @param e
       * @param item
       */
      choose(e, item) {
        e.preventDefault()

        let date = new Date()
        date.setFullYear(item.year)
        date.setMonth(item.month)
        date.setDate(item.day)
        this.value = date

        this.dateArray.forEach((arr) => {
          arr.forEach((d) => {
            d.selected = false
          })
        })
        item.selected = true

        this.onChange(date)
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

      makeDateArray() {
        const dateArr = []

        // 先看value,如果没有就使用默认日期,最后才使用今天
        let date = new Date()
        date.setFullYear(this.control.year)
        date.setMonth(this.control.month)
        date.setDate(this.control.date)

        let year = date.getFullYear()
        let month = date.getMonth()

        date.setDate(1)
        let firstDayWeek = date.getDay()
        let difference = firstDayWeek - this.weekArray[0]

        let days = getNormalDateArray(year, month, this.today)

        let firstDateArray = days.splice(0, getFirstDateArrayLength(difference))

        dateArr.push(firstDateArray)

        while (days.length > 0) {
          dateArr.push(days.splice(0, 7))
        }

        // 让第一个月和最后一个月数组变成7
        fillDateArray(year, month, dateArr)

        return dateArr
      }
    }

  }

</script>
