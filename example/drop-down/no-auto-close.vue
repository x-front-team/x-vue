<template>
  <div id="x-vue-demo-drop-down-auto-close" class="clearfix">
    <drop-down
            btn-type="primary"
            id="x-vue-demo-drop-down-base1"
            :label="'no auto close'"
            :close-on-lose-focus="false"
            :show-drop-down.sync="showDropDown"
            :toggle="false">
      <card>
        <card-block>
          <card-title>No auto close</card-title>
          <card-text>you can not close me only if you click the close btn</card-text>
          <x-button type="warning" @click="handleClose">关闭</x-button>
        </card-block>
      </card>
    </drop-down>
  </div>
</template>
<style lang="sass" rel="stylesheet/scss">
  #x-vue-demo-drop-down-base{
    .dropdown{
      float: left;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
</style>
<script type="text/babel">
  import dropDown from '../../component/drop-down/drop-down.vue'
  import xButton from '../../component/button/button.vue'
  export default {
    data() {
      return {
        showDropDown: false
      }
    },
    components: {
      dropDown,
      xButton
    },
    methods: {
      handleClose(e) {
        e.preventDefault()
        this.showDropDown = false
      }
    }
  }
</script>
