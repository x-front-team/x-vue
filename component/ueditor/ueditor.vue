<template>
  <script :id="containerId" type="text/plain"></script>
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
      this.editorPromise = new Promise((resolve) => {
        // 必须先加载config.js
        $script.order([
          'http://ueditor.baidu.com/ueditor/ueditor.config.js',
          'http://ueditor.baidu.com/ueditor/ueditor.all.min.js',
        ], () => {
          // 合并配置并初始化
          // getEditor调用完后,它还会去加载其他静态资源,后续api需要在ready回调中调用
          this.editor = global.UE.getEditor(this.containerId, {
            ...defaultConfig,
            ...this.config,
          })
          this.editor.addListener('contentChange', this.onContentChange)
          resolve()
        })
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
        // 忘了这个重要的API!!!
        this.editorPromise.then(() => {
          this.editor.ready(() => {
            if (val === this.editor.getContent()) {
              return
            }
            this.editor.setContent(val)
          })
        })

      }
    }
  }
</script>
