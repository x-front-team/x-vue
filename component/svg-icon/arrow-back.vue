<template>
  <svg-icon path="M20 11h-12.17l5.59-5.59-1.42-1.41-8 8 8 8 1.41-1.41-5.58-5.59h12.17v-2z" :size="size"></svg-icon>
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
