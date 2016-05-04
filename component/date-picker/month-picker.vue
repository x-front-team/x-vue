<template>
  <div class="x-month-picker">

    <table>
      <tbody>
      <tr v-for="line in months">
        <td v-for="month in line">
          <a href="#"
             @click.prevent="select(month)"
             :class="{'month-item': true,
             'this-month': thisYear && month === thisMonth,
             'selected': thisYear && month === selected}">{{month}}</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="sass" rel="stylesheet/scss">
  .x-month-picker{
    &>table{
      width : 100%;
      text-align: center;

      .month-item{
        display: inline-block;
        border-radius: 5px;
        width : 60px;
        line-height: 40px;
        cursor: pointer;
        transition: all .3s;
        &:hover{
          background-color: #eee;
          text-decoration: none;
        }

        &.selected{
          background-color: #00b0e8;
          color: #ffffff;
        }

        &.this-month{
          color: #333333;
        }

      }
    }
  }
</style>

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
        default: function () {}
      },
      control: {
        type: Object
      }
    },

    data: function () {
      return {
        months: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]],
        control: {
          year: 0
        },
        selectedYear: 0,
        thisMonth: date.getMonth() + 1
      }
    },

//    ready() {
//      if (this.value) {
//        this.control.year = this.selectedYear = new Date(this.value).getFullYear()
//      } else {
//        this.control.year = this.selectedYear = new Date().getFullYear()
//      }
//
//      this.$watch('value', (val) => {
//        let date = new Date(val)
//        let year = date.getFullYear()
//        this.selectedYear = year
//        if (this.control.year !== year) {
//          this.control.year = year
//        }
//      })
//
//    },

    computed: {
      selected() {
        if (!this.value) return -1
        return new Date(this.value).getMonth() + 1
      },
      thisYear() {
        return this.control.year === this.selectedYear
      }
    },
    methods: {
      select(month) {
        this.value.setMonth(month - 1)
      },
      lastYear() {
        this.control.year--
      },
      nextYear() {
        this.control.year++
      },
      handleYearClick() {
        this.selectedYear()
      }
    }
  }
</script>
