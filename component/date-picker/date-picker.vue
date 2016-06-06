<template>

  <div class="x-date-picker">

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

    <!--<div class="chose-today" @click="selectToday">-->
      <!--<span>今天</span>-->
    <!--</div>-->

  </div>

</template>

<script type="text/babel">

  import XButton from '../button/button.vue'

  import { getNormalDateArray, getFirstDateArrayLength, fillDateArray, weekArray } from './util'

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
      value: {
        type: Number,
        default: function () {
          return today
        },
        twoWay: false
      },
      onChange: {
        type: Function,
        default: function () {}
      },
      highlightToday: {
        type: Boolean,
        default: true
      },
      selectMonth: {
        type: Function,
        default: function () {}
      },
      control: {
        type: Object
      }
    },

    components: {
      XButton
    },

    data() {
      return {
        today: today,
        weeks: weekArray
      }
    },

    beforeDestroy() {
      this._unWatchValue()
    },

    computed: {
      dateArray() {
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

        let days = getNormalDateArray(year, month, this.today, this.control)

        let firstDateArray = days.splice(0, getFirstDateArrayLength(difference))

        dateArr.push(firstDateArray)

        while (days.length > 0) {
          dateArr.push(days.splice(0, 7))
        }

        // 让第一个月和最后一个月数组变成7
        fillDateArray(year, month, dateArr, this.control)
        return dateArr
      }
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
        if (item.disabled) return

        let date = new Date()
        date.setFullYear(item.year)
        date.setMonth(item.month)
        date.setDate(item.day)
        // value是prop, 能赋值?
//        this.value = date

        this.dateArray.forEach((arr) => {
          arr.forEach((d) => {
            d.selected = false
          })
        })
        item.selected = true

        this.onChange(date)
      },

      selectToday() {
        this.onChange(new Date())
      },

      handleMonthClick() {
        this.selectMonth()
      }
    }

  }

</script>
