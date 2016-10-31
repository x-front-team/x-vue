<template>
  <div id="x-vue-demo-drop-down-base" class="clearfix">
    <div v-show="show">
      <x-drop-down btn-type="link" :label="'link'" id="x-vue-demo-drop-down-base-link">
        <example type="link"></example>
      </x-drop-down>
    </div>
    <x-button type="primary" @click="toggle">show drop down</x-button>
    <!--<x-drop-down-old position="left" btn-type="primary" disabled :label="'primary'" id="x-vue-demo-drop-down-old-base-primary">-->
      <!--<example type="primary"></example>-->
    <!--</x-drop-down-old>-->
    <!--<x-drop-down-old btn-type="success" :label="'success'" position="left" id="x-vue-demo-drop-down-old-base-success">-->
      <!--<example type="success"></example>-->
    <!--</x-drop-down-old>-->
    <!--<x-drop-down-old btn-type="info" :label="'info'" id="x-vue-demo-drop-down-old-base-info">-->
      <!--<example type="info"></example>-->
    <!--</x-drop-down-old>-->
    <!--<x-drop-down-old btn-type="danger" :label="'danger'" id="x-vue-demo-drop-down-old-base-danger">-->
      <!--<example type="danger"></example>-->
    <!--</x-drop-down-old>-->
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
        show: false
      }
    },
    methods: {
      toggle() {
        debugger
        this.show = !this.show
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
