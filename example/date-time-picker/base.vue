<template>

  <x-date-picker></x-date-picker>
  <input type="text" v-x-date-time-picker :highlight-today="highlight" @click="toggle">

</template>
<style lang="sass" scoped rel="stylesheet/scss">

</style>
<script type="text/babel">
  export default {
    data: function () {
      return {
        model: 'bbb',
        highlight: false
      }
    },
    methods: {
      toggle() {
        this.highlight = !this.highlight
      }
    }
  }
</script>
