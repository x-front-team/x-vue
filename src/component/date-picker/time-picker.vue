<template>
  <div class="x-time-picker">
    <div class="time-area">
      <div class="time-part col-xs-{{colSpan}} text-xs-center">
        <button  @click="increaseHour">
          <chevron-up></chevron-up>
        </button>
        <div>
          <input type="text" class="form-control text-xs-center" :value="hourText" maxlength="2" @blur="hourBlur">
        </div>
        <button @click="decreaseHour">
          <chevron-down></chevron-down>
        </button>
      </div>
      <div class="time-part col-xs-{{colSpan}} text-xs-center">
        <button @click="increaseMinute">
          <chevron-up></chevron-up>
        </button>
        <div>
          <input type="text" class="form-control text-xs-center" :value="minuteText" maxlength="2" @blur="minuteBlur">
        </div>
        <button @click="decreaseMinute">
          <chevron-down></chevron-down>
        </button>
      </div>
      <div v-if="isSecondEnabled" class="time-part col-xs-{{colSpan}} text-xs-center" >
        <button @click="increaseSecond">
          <chevron-up></chevron-up>
        </button>
        <div>
          <input type="text" class="form-control text-xs-center" :value="secondText" maxlength="2" @blur="secondBlur">
        </div>
        <button @click="decreaseSecond">
          <chevron-down></chevron-down>
        </button>
      </div>
    </div>
  </div>

</template>

<script type="text/babel">
  import chevronUp from '../svg-icon/chevron-up.vue'
  import chevronDown from '../svg-icon/chevron-down.vue'
  export default {
    props: {
      control: {
        type: Object,
      },
      onChange: {
        type: Function
      },
      isSecondEnabled: {
        type: Boolean,
        default: true,
      }
    },
    components: {
      chevronUp,
      chevronDown,
    },
//    data: function () {
//      let { hour, minute, second } = this.control
//      return {
//        hour, minute, second
//      }
//    },
    computed: {
      hourText () {
        return this.getText('hour')
      },
      minuteText () {
        return this.getText('minute')
      },
      secondText () {
        return this.getText('second')
      },
      hour () {
        return this.control.hour
      },
      minute () {
        return this.control.minute
      },
      second () {
        return this.control.second
      },
      colSpan () {
        // 暂不考虑用flex, 如果需要隐藏小时或者分,这里需要改
        return 12 / (this.isSecondEnabled ? 3 : 2)
      }
    },
    methods: {
      getText (segment) {
        let value = this.control[segment]
        return (value + '').length === 2 ? value : '0' + value
//        let zeros = '0'.repeat(2 - `${value}`.length)
//        return `${zeros}${value}`
      },
      increaseHour () {
        if (this.hour >= 23) {
          this.setHour(0)
          return
        }
        this.setHour(this.hour + 1)
      },
      decreaseHour () {
        if (this.hour <= 0) {
          this.setHour(23)
          return
        }
        this.setHour(this.hour - 1)
      },
      increaseMinute () {
        if (this.minute >= 59) {
          this.setMinute(0)
          return
        }
        this.setMinute(this.minute + 1)
      },
      decreaseMinute () {
        if (this.minute <= 0) {
          this.setMinute(59)
          return
        }
        this.setMinute(this.minute - 1)
      },
      increaseSecond () {
        if (this.second >= 59) {
          this.setSecond(0)
          return
        }
        this.setSecond(this.second + 1)
      },
      decreaseSecond () {
        if (this.second <= 0) {
          this.setSecond(59)
          return
        }
        this.setSecond(this.second - 1)
      },
      setHour (hour) {
        this.onChange(hour, this.minute, this.second)
      },
      setMinute (minute) {
        this.onChange(this.hour, minute, this.second)
      },
      setSecond (second) {
        this.onChange(this.hour, this.minute, second)
      },
      formatValue (val, min, max) {
        if (!/^\d{1,2}$/.test(val)) {
          val = 0
        }
        val = Number.parseInt(val, 10)
        val = Math.max(min, val)
        val = Math.min(val, max)
        return val
      },
      hourBlur (e) {
        let val = e.target.value
        let formattedVal = this.formatValue(val, 0, 23)
        this.setHour(formattedVal)
      },
      minuteBlur (e) {
        let val = e.target.value
        let formattedVal = this.formatValue(val, 0, 59)
        this.setMinute(formattedVal)
      },
      secondBlur (e) {
        let val = e.target.value
        let formattedVal = this.formatValue(val, 0, 59)
        this.setSecond(formattedVal)
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  $light-color = #ccc;

  button {
    background: none;
    border: none;
    color: $light-color;
    &:hover {
      color: #000;
    }
  }
  input.form-control {
    display: block;
    width: 35px;
    height:35px;
    padding: 0;
    margin: 15px auto;
    border-radius: 2px;
    background-color: transparent;
    text-align: center;
  }
  .time-area {
    height: 140px;
    padding-top: 10px;
  }
  .time-part {
    position: relative;
    &:after {
      content: ':';
      position: absolute;
      left: 97%;
      top: 42%;
    }
    &:last-child:after{
      content: '';
    }
  }
//  删除number的spinner上下箭头
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
</style>
