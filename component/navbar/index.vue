<template>
  <nav class="navbar navbar-light bg-faded" :class="className" :style="styles">
    <slot></slot>
  </nav>
</template>

<script>
export default {
  props: {
    className: {
      type: Array,
      default: function () {
        return []
      }
    },
    styles: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
