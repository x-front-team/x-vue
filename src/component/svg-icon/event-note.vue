<template>
  <svg-icon path="M17 10h-10v2h10v-2zm2-7h-1v-2h-2v2h-8v-2h-2v2h-1c-1.11 0-1.99.9-1.99 2l-.01 14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2zm0 16h-14v-11h14v11zm-5-5h-7v2h7v-2z" :size="size">></svg-icon>
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
