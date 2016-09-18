<template>
  <a href="#" :class="classes">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    props: {
      disabled: {
        fill: true
      }
    },
    computed: {
      classes() {
        return {
          'dropdown-item': true,
          'disabled': this.disabled
        }
      }
    }
  }
</script>
