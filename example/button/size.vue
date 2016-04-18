<template>

  <div class="button-example" id="x-vue-button-demo-size">
    <x-button type="primary" size="sm">small button</x-button>
    <x-button type="primary">nromal button</x-button>
    <x-button type="secondary" size="lg">large button</x-button>
    <x-button type="primary" size="sm" block>block small button</x-button>
    <x-button type="primary" block>block normal button</x-button>
    <x-button type="primary" size="lg" block>block large button</x-button>
  </div>

</template>

<style lang="sass" rel="stylesheet/scss">
  .button-example .btn{
    margin-bottom: 10px;
  }
</style>

<script type="text/babel">
  import xButton from '../../component/button/button.vue'
  export default {
    components: {
      xButton
    }
  }
</script>
