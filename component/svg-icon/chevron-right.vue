<template>
  <svg-icon path="M8.59 16.34l4.58-4.59-4.58-4.59 1.41-1.41 6 6-6 6z" :size="size"></svg-icon>
</template>

<script>
  import svgIcon from './svg-icon.vue'
  import propsMixin from './props-mixin'
  export default {
    mixins: [propsMixin],
    components: {
      svgIcon
    }
  }
</script>
