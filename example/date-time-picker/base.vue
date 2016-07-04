<template>

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

</template>
<style lang="sass" scoped rel="stylesheet/scss">

</style>
<script type="text/babel">
  export default {
    data: function () {
      return {
        model: 'bbb',
        highlight: false,
        period: '22:00',
        value: {
          a: '2016-06-01 09:22:12'
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
