<template>
  <svg viewBox="0 0 24 24"
       preserveAspectRatio="xMidYMid meet"
       fit
       :style="style">
    <g><path :d="path"/></g>
  </svg>
</template>

<script type="text/babel">
  export default {
    props: {
      path: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 24
      }
    },
    computed: {
      style() {
        return {
          fill: 'currentcolor',
          verticalAlign: 'middle',
          width: this.size,
          height: this.size
        }
      }
    }
  }
</script>
