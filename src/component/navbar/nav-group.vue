<template>
  <div class="nav-group" :class="className">
    <slot></slot>
  </div>
</template>

<script>
const floatOpts = {
  left: 'pull-xs-left',
  right: 'pull-xs-right'
}

export default {
  props: {
    float: {
      type: String,
      default: 'none'
    }
  },

  computed: {
    className() {
      return [floatOpts[this.float] || '']
    }
  }
}
</script>
