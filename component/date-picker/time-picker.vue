<template>
  <div class="x-time-picker">
    <div class="time-area">
      <div class="col-xs-4 text-xs-center">
        <button  @click="increaseHour">
          <chevron-up></chevron-up>
        </button>
        <div>
          <input type="text" class="form-control text-xs-center" :value="hourText" disabled>
        </div>
        <button @click="decreaseHour">
          <chevron-down></chevron-down>
        </button>
      </div>
      <div class="col-xs-4 text-xs-center">
        <button @click="increaseMinute">
          <chevron-up></chevron-up>
        </button>
        <div>
          <input type="text" class="form-control text-xs-center" :value="minuteText" disabled>
        </div>
        <button @click="decreaseMinute">
          <chevron-down></chevron-down>
        </button>
      </div>
      <div class="col-xs-4 text-xs-center">
        <button @click="increaseSecond">
          <chevron-up></chevron-up>
        </button>
        <div>
          <input type="text" class="form-control text-xs-center" :value="secondText" disabled>
        </div>
        <button @click="decreaseSecond">
          <chevron-down></chevron-down>
        ️</button>
      </div>
    </div>
    <!--<div class="chose-now" @click="selectNow">-->
      <!--<span>现在</span>-->
    <!--</div>-->
  </div>

</template>

<script type="text/babel">
  import chevronUp from '../svg-icon/chevron-up.vue'
  import chevronDown from '../svg-icon/chevron-down.vue'
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
  $light-color: #ccc;
  
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
  }
  .time-area {
    height: 140px;
  }
  .col-xs-4 {
    position: relative;
    padding-top: 10px;
    &:after {
      content: ':';
      position: absolute;
      left: 99%;
      top: 45%;
    }
    &:last-child:after{
      content: '';
    }
  }
</style>