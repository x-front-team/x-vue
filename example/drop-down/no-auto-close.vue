<template>
  <div id="x-vue-demo-drop-down-auto-close" class="clearfix">
    <x-drop-down
            btn-type="primary"
            id="x-vue-demo-drop-down-base1"
            :label="'no auto close'"
            :show-drop-down.sync="showDropDown"
            :toggle="false">
      <x-card>
        <x-card-block>
          <x-card-title>No auto close</x-card-title>
          <x-card-text>you can not close me only if you click the close btn</x-card-text>
          <x-button type="warning" @click="handleClose">关闭</x-button>
        </x-card-block>
      </x-card>
    </x-drop-down>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  #x-vue-demo-drop-down-base{
    .dropdown{
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
</style>
<script type="text/babel">
  export default {
    data() {
      return {
        showDropDown: false
      }
    },
    methods: {
      handleClose(e) {
        e.preventDefault()
        this.showDropDown = false
      }
    }
  }
</script>
