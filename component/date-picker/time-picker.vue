<template>
  <div class="x-time-picker">
    <div class="time-area row">
      <div class="col-xs-4 text-xs-center">
        <button @click="increaseHour">⬆️</button>
        <div>
          <input type="text" class="form-control text-xs-center" :value="hourText" disabled>
        </div>
        <button @click="decreaseHour">⬇️</button>
      </div>
      <div class="col-xs-4 text-xs-center">
        <button @click="increaseMinute">⬆️</button>
        <div>
          <input type="text" class="form-control text-xs-center" :value="minuteText" disabled>
        </div>
        <button @click="decreaseMinute">⬇️</button>
      </div>
      <div class="col-xs-4 text-xs-center">
        <button @click="increaseSecond">⬆️</button>
        <div>
          <input type="text" class="form-control text-xs-center" :value="secondText" disabled>
        </div>
        <button @click="decreaseSecond">⬇️</button>
      </div>
    </div>
    <div class="chose-now" @click="selectNow">
      <span>现在</span>
    </div>
  </div>

</template>

<script type="text/babel">
//  import chevronUp from '../svg-icon/chevron-up.vue'
//  import chevronDown from '../svg-icon/chevron-down.vue'
  export default {
    props: {
      setHour: {
        type: Function,
      },
      setMinute: {
        type: Function,
      },
      setSecond: {
        type: Function,
      },
      control: {
        type: Object,
      },
      onChange: {
        type: Function
      }
    },
//    components: {
//      chevronUp,
//      chevronDown,
//    },
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
    },
    methods: {
      getText (segment) {
        let value = this.control[segment]
        let zeros = '0'.repeat(2 - `${value}`.length)
        return `${zeros}${value}`
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
      selectNow () {

      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .time-area {
    height: 120px;
  }
</style>