<template>
  <svg-icon path="M12 4l-1.41 1.41 5.58 5.59h-12.17v2h12.17l-5.58 5.59 1.41 1.41 8-8z" :size="size"></svg-icon>
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
