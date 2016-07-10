<template>

  <p>
    <input type="text"
           v-model="value.a"
           v-date-time-picker
           format="yyyy-MM-dd hh:mm:ss"
           :highlight-today="highlight" @click="toggle">

    <input type="text"
           v-model="period"
           v-date-time-picker
           format="hh:mm"
           @click="toggle">

    <input type="text"
           v-date-time-picker
           format="yyyy-MM-dd"
           :max-date="maxDate"
           @click="toggle">
  </p>

</template>
<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
<script type="text/babel">
  export default {
    data: function () {
      return {
        model: 'bbb',
        highlight: false,
        period: '22:00',
        maxDate: new Date().getTime(),
        value: {
          a: ''
        }
      }
    },
    methods: {
      toggle() {
        this.highlight = !this.highlight
      }
    }
  }
</script>
