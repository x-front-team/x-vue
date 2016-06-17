<template>
  <div class="back-drop" transition="fade" @click="handleClick">
    <slot></slot>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .back-drop{
    position : fixed
    z-index : 1001
    left : 0
    top : 0
    right : 0
    bottom : 0
    background-color : rgba(0,0,0,.3)
  }
</style>

<script type="text/babel">
  export default {
    props: {
      onClick: {
        type: Function,
        default: function defaultClick () {}
      }
    },
    methods: {
      handleClick(e) {
        if (this.$el === e.target) {
          this.onClick()
        }
      }
    }
  }
</script>
