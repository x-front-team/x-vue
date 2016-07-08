<template>
  <svg viewBox="0 0 24 24"
       preserveAspectRatio="xMidYMid meet"
       fit
       :style="styl">
    <g><path :d="path"/></g>
  </svg>
</template>

<script type="text/babel">
  import propsMixin from './props-mixin'
  export default {
    mixins: [propsMixin],
    props: {
      path: {
        type: String,
        default: ''
      }
    },
    computed: {
      styl() {
        return {
          fill: 'currentcolor',
          verticalAlign: 'middle',
          width: this.size + 'px',
          height: this.size + 'px'
        }
      }
    }
  }
</script>
