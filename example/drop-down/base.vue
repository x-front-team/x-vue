<template>
  <div id="x-vue-demo-drop-down-base" class="clearfix">
    <x-drop-down btn-type="link" :label="'link'" id="x-vue-demo-drop-down-base-link">
      <example type="link"></example>
    </x-drop-down>
    <x-drop-down position="left" btn-type="primary" disabled :label="'primary'" id="x-vue-demo-drop-down-base-primary">
      <example type="primary"></example>
    </x-drop-down>
    <x-drop-down btn-type="success" :label="'success'" position="left" id="x-vue-demo-drop-down-base-success">
      <example type="success"></example>
    </x-drop-down>
    <x-drop-down btn-type="info"
                 :on-lose-focus="loseFocus"
                 :label="'info'"
                 id="x-vue-demo-drop-down-base-info">
      <example type="info"></example>
    </x-drop-down>
    <x-drop-down btn-type="danger" :label="'danger'" id="x-vue-demo-drop-down-base-danger">
      <example type="danger"></example>
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
    methods: {
      loseFocus() {
        console.log('lose focus')
      }
    },
    components: {
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
