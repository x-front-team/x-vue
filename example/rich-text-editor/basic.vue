<template>
  <p>
    <button :on-click="clear" size="sm">清空内容</button>
    <button :on-click="changeContent" size="sm">设置新内容</button>
  </p>
  <rich-text-editor :content="content" :config="config" :on-change="onEditorChange"></rich-text-editor>
</template>

<script>
import richTextEditor from 'component/rich-text-editor/rich-text-editor.vue'
import button from 'component/button/button.vue'

export default {
  data() {
    return {
      // 富文本内容
      content: '<p style="color: red;">这是一段红色富文本</p>',
      // 富文本配置
      config: {
        initialFrameHeight: 500,
      }
    }
  },
  components: {
    richTextEditor,
    button,
  },
  methods: {
    onEditorChange (content) {
      this.content = content
      console.log(this.content)
    },
    clear () {
      this.content = ''
    },
    changeContent () {
      this.content = '<p style="color: blue;">我是新内容, 一段蓝色文本</p>'
    }
  }
}
</script>
