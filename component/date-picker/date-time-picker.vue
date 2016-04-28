<template>

  <div class="x-date-time-picker-container" :style="style">
    <date-picker :on-change="dateChange" :highlight-today="highlightToday"></date-picker>
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
//  import monthPicker from './month-picker.vue'
//  import yearPicker from './year-picker.vue'

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
      }
    },
    components: {
      datePicker,

//      timePicker,
//      monthPicker,
//      yearPicker
    },

    data() {
      return {
        showing: 'date-picker'
      }
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

      dateChange(value) {
        this.onChange(value)
      }
    }

  }
</script>
