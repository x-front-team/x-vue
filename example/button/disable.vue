<template>

  <div class="button-example" id="x-vue-button-demo-base">
    <x-button type="primary" :disabled="isDisabled">primary</x-button>
    <x-button type="success" @click="disableButton">toggle it</x-button>
  </div>

</template>

<style lang="stylus" rel="stylesheet/stylus">
  .button-example .btn{
    margin-bottom: 10px;
  }
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        isDisabled: false
      }
    },
    methods: {
      disableButton() {
        this.isDisabled = !this.isDisabled
      }
    }
  }
</script>
