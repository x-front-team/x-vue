<template>
  <div id="x-vue-demo-drop-down-base" class="clearfix">
    <drop-down btn-type="link" :label="'link'" id="x-vue-demo-drop-down-base-link">
      <example type="link"></example>
    </drop-down>
    <drop-down btn-type="primary" :label="'primary'" id="x-vue-demo-drop-down-base-primary">
      <example type="primary"></example>
    </drop-down>
    <drop-down btn-type="success" :label="'success'" id="x-vue-demo-drop-down-base-success">
      <example type="success"></example>
    </drop-down>
    <drop-down btn-type="info" :label="'info'" id="x-vue-demo-drop-down-base-info">
      <example type="info"></example>
    </drop-down>
    <drop-down btn-type="danger" :label="'danger'" id="x-vue-demo-drop-down-base-danger">
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
        template: '<x-card id="x-vue-demo-drop-down-base-card-{{type}}">' +
                '<x-card-block>' +
                  '<x-card-title>{{type}}</x-card-title>' +
                  '<x-card-text>{{text}}</x-card-text>' +
                '</x-card-block>' +
                '</x-card>'
      }
    }
  }
</script>
