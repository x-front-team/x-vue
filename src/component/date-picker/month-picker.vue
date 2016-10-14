<template>
  <div class="x-month-picker">

    <table>
      <tbody>
      <tr v-for="line in months">
        <td v-for="month in line">
          <a href="#"
             @click.prevent="select(month)"
             :class="{'month-item': true,
             'this-month': thisYear === control.year && month.month === thisMonth - 1,
             'disabled': month.disabled,
             'selected': month.selected}">{{month.month + 1}}月</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/babel">

  const date = new Date()

  export default {
    props: {
      value: {
        type: Number,
        twoWay: false
      },
      selectedYear: {
        type: Function,
        default() {}
      },
      control: {
        type: Object
      },
      onChange: {
        type: Function
      }
    },

    data() {
      return {
//        months: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]],
//        selectedYear: 0,
        thisMonth: date.getMonth() + 1,
        thisYear: date.getFullYear()
      }
    },

    computed: {
      selected() {
        if (!this.value) return -1
        return new Date(this.value).getMonth() + 1
      },
      months() {
        let { minDate, maxDate, valueDate } = this.control
        minDate = minDate === -1 ? null : new Date(minDate)
        maxDate = maxDate === -1 ? null : new Date(maxDate)

        let year = this.control.year
        let minYear = minDate && minDate.getFullYear()
        let minMonth = minDate && minDate.getMonth()
        let maxYear = maxDate && maxDate.getFullYear()
        let maxMonth = maxDate && maxDate.getMonth()

        let monthArr = [], arr, i=0, j
        while (i < 11) {
          arr = []
          for (j=0; j<3; j++) {
            arr.push({
              month: i,
              selected: valueDate && year === valueDate.year && i === valueDate.month,
              disabled: (minYear && year < minYear) ||
                        (maxYear && year > maxYear) ||
                        (minYear && minMonth && year === minYear && i < minMonth) ||
                        (maxYear && maxMonth && year === maxYear && i > maxMonth)
            })
            i++
          }
          monthArr.push(arr)
        }
        return monthArr
      }
    },
    methods: {
      select(month) {
        if (month.disabled) return
        this.onChange(month.month)
      }
    }
  }
</script>
