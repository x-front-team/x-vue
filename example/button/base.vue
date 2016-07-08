<template>

  <div class="button-example" id="x-vue-button-demo-base">
    <x-button type="primary">primary</x-button>
    <x-button type="success">success</x-button>
    <x-button type="info">info</x-button>
    <x-button type="danger">danger</x-button>
    <x-button type="warning">warning</x-button>
    <x-button type="secondary">secondary</x-button>
    <x-button type="link">link</x-button>
  </div>

</template>

<style lang="stylus" rel="stylesheet/stylus">
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
