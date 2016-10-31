<template>
  <div id="x-vue-demo-drop-down-auto-close" class="clearfix">
    <x-drop-down
            btn-type="primary"
            class-names="slot-drop-down"
            id="x-vue-demo-drop-down-slot">

      <span class="demo-btn" slot="btn">
        this is slot content
      </span>

      <x-card>
        <x-card-block>
          <x-card-title>Slot Button</x-card-title>
          <x-card-text>you can make your btn what you want by slot btn</x-card-text>
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
  .demo-btn{
    color: red;
  }
</style>
<script type="text/babel">
  export default {}
</script>
