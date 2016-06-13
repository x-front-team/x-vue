<template>
  <script :id="containerId" type="text/plain" v-html="content"></script>
</template>

<script type="text/babel">
  import defaultConfig from './editor-config'
  import $script from 'scriptjs'

  // 设置ueditor路径
  global.UEDITOR_HOME_URL = 'http://ueditor.baidu.com/ueditor/'

  // 保证编辑器id唯一
  let uuid = 1
  function getEditorId() {
    return `ueditor_container_${uuid++}`
  }
  export default {
    props: {
      // 富文本内容
      content: {
        type: String,
        required: true,
      },
      // 配置
      config: {
        type: Object,
        default: () => ({}),
      },
      // 在编辑器内编辑文本后出发change事件, 保证单向数据流
      onChange: {
        type: Function,
        required: true,
      }
    },
    ready () {
      // 理论上必须先加载config.js,然后再加载主模块, 但不知为何,这俩换了顺序也可以,
      // 另外做过简单的demo, 同步情况下, 如果config在后,初始化失败
      // 可能因为是都是异步加载,all.js加载较慢, 绝大部分情况下都是后执行
      // 改为顺序加载
      $script.order([
        'http://ueditor.baidu.com/ueditor/ueditor.config.js',
        'http://ueditor.baidu.com/ueditor/ueditor.all.min.js',
      ], () => {
        // 合并配置并初始化
        this.editor = global.UE.getEditor(this.containerId, {
          ...defaultConfig,
          ...this.config,
        })
        this.editor.addListener('contentChange', this.onContentChange)
      })
    },
    data () {
      return {
        containerId: getEditorId()
      }
    },
    computed: {
      // 这个计算属性会有问题,因为editor.getContent的依赖vue找不到
//      editorContent () {
//        debugger
//        return this.editor.getContent()
//      }
    },
    methods: {
      // 通知父组件,内容发生变化
      onContentChange () {
        this.onChange(this.editor.getContent())
      }
    },
    watch: {
      // 由于绑定了content的prop被编辑器干掉了,所以需要通过watch同步父组件的prop变化
      content (val) {
        // 如果val === this.editor.getContent()说明是本组件调用父组件onChange方法而导致的值变化
        // 重新设置会导致文本光标位置变化
        if (val === this.editor.getContent()) {
          return
        }
        this.editor.setContent(val)
      }
    }
  }
</script>
