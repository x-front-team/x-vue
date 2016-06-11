<template>
  <div>
    <script :id="containerId" type="text/plain" v-html="content"></script>
  </div>
</template>

<script type="text/babel">
  import defaultConfig from './editor-config'
  import $script from 'scriptjs'

  // 设置ueditor路径
  global.UEDITOR_HOME_URL = 'http://ueditor.baidu.com/ueditor/'
  let uuid = 1
  function getEditorId() {
    return `ueditor_container_${uuid++}`
  }
  export default {
    props: {
      content: {
        type: String,
        required: true,
      },
      config: {
        type: Object,
        default: () => ({}),
      }
    },
    ready () {
      // 理论上必须先加载config.js,然后再加载主模块, 但不知为何,这俩换了顺序也可以
      $script([
        'http://ueditor.baidu.com/ueditor/ueditor.config.js',
        'http://ueditor.baidu.com/ueditor/ueditor.all.min.js',
      ], 'ueditorBundle')
      $script.ready('ueditorBundle', () => {
        this.editor = global.UE.getEditor(this.containerId, {
          ...defaultConfig,
          ...this.config,
        })
      })
    },
    data () {
      return {
        containerId: getEditorId()
      }
    },
    methods: {}
  }
</script>
