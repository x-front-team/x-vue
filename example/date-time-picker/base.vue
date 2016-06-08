<template>

  <input type="text" v-date-time-picker v-model="value.a" :format="'yyyy-MM-dd hh:mm:ss'" :highlight-today="highlight" @click="toggle">

</template>
<style lang="sass" scoped rel="stylesheet/scss">

</style>
<script type="text/babel">
  export default {
    data: function () {
      return {
        model: 'bbb',
        highlight: false,
        // value: '2016-06-01 09:22:12'
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
