<template>
  <div id="x-vue-demo-drop-down-base" class="clearfix">
    <drop-down btn-type="link" :label="'link'" id="x-vue-demo-drop-down-base1">
      <example type="link"></example>
    </drop-down>
    <drop-down btn-type="primary" :label="'primary'" id="x-vue-demo-drop-down-base2">
      <example type="primary"></example>
    </drop-down>
    <drop-down btn-type="success" :label="'success'" id="x-vue-demo-drop-down-base3">
      <example type="success"></example>
    </drop-down>
    <drop-down btn-type="info" :label="'info'" id="x-vue-demo-drop-down-base4">
      <example type="info"></example>
    </drop-down>
    <drop-down btn-type="danger" :label="'danger'" id="x-vue-demo-drop-down-base5">
      <example type="danger"></example>
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
  export default {
    components: {
      dropDown,
      example: {
        props: ['type'],
        computed: {
          text() {
            return 'This is a drop down type of ' + this.type
          }
        },
        template: '<card>' +
                '<card-block>' +
                  '<card-title>{{type}}</card-title>' +
                  '<card-text>{{text}}</card-text>' +
                '</card-block>' +
                '</card>'
      }
    }
  }
</script>
