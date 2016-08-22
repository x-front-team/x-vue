<template>
  <x-alert :close-btn="true" :on-close="handleClose" v-show="show" effect="fade">
    click to close
  </x-alert>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        show: true
      }
    },
    methods: {
      handleClose() {
        this.show = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .fade-transition{
    transition: all .3s
    opacity 1
  }
  .fade-enter, .fade-leave{
    opacity 0
  }
</style>
