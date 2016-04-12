<template>
  <card header="drop down example">
    <div>
      <drop-down btn-type="link" :label="'label'" id="x-vue-demo-drop-down">
        <card type="success">
          <card-block>
            <card-title>This is card title</card-title>
            <card-text>hehehehehehehehe what the fuck!!!</card-text>
          </card-block>
        </card>
      </drop-down>
    </div>
  </card>
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
