<template>
  <div>
    <drop-down :label="'label'" id="x-vue-demo-drop-down">
      <p>This is content</p>
      <p>This is content</p>
      <p>This is content</p>
      <p>This is content</p>
      <p>This is content</p>
      <p>This is content</p>
      <p>This is content</p>
      <p>This is content</p>
    </drop-down>
  </div>
</template>
<style lang="sass" scoped rel="stylesheet/scss">

</style>
<script type="text/babel">
  import dropDown from '../component/drop-down/drop-down.vue'
  export default {
    components: {
      dropDown
    }
  }
</script>