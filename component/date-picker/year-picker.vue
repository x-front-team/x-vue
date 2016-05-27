<template>
  <div class="x-year-picker">

    <div>
      <ul>
        <li class="control-item">
          <a href="#" @click.prevent="last" class="year-picker-item">
            <chevron-left></chevron-left>
          </a>
        </li>
        <li v-for="year in years" class="year-item">

          <a href="#"
             @click.prevent="select(year)"
             :class="{'this-year': thisYear === year.year,
             'year-picker-item': true,
             'disabled': year.disabled,
             'selected': year.selected}">{{year.year}}</a>

        </li>
        <li class="control-item">
          <a href="#" @click.prevent="next" class="year-picker-item">
            <chevron-right></chevron-right>
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script type="text/babel">
  import chevronLeft from '../svg-icon/chevron-left.vue'
  import chevronRight from '../svg-icon/chevron-right.vue'

  const today = new Date()

  export default {
    components: {
      chevronLeft,
      chevronRight
    },
    props: {
      control: {
        type: Object
      },
      onChange: {
        type: Function
      }
    },
    data() {
      return {
        index: 0,
        thisYear: today.getFullYear()
      }
    },
    ready() {
      this.index = Math.floor(this.control.year / 10)
      this.$watch('control.year', () => {
        this.index = Math.floor(this.control.year / 10)
      })
    },
    methods: {
      last() {
        this.index--
      },
      next() {
        this.index++
      },
      select(year) {
        if (year.disabled) return
        this.onChange(year.year)
      }
    },
    computed: {
      years() {
        let arr = []
        let i = 0
        let index = this.index * 10

        let { minDate, maxDate } = this.control

        minDate = minDate !== -1 && new Date(minDate)
        maxDate = maxDate !== -1 && new Date(maxDate)

        let minYear = minDate && minDate.getFullYear()
        let maxYear = maxDate && maxDate.getFullYear()

        let valueDate = this.control.valueDate
        let year = valueDate ? valueDate.year : false

        while (i < 10) {
          arr.push({
            year: index + i,
            selected: year && year === index + i,
            disabled: (minYear && minYear > index + i) || (maxYear && index + i > maxYear)
          })
          i++
        }
        return arr
      }
    }
  }
</script>
