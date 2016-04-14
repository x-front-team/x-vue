<template>
  <drop-down></drop-down>
</template>

<script>
  import dropDown from './drop-down.vue'

  export default {
    props: {
      items: {
        type: Array,
        default: []
      }
    },
    components: {
      dropDown
    }
  }
</script>
