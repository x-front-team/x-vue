<template>
  <rich-text-editor :content="content" :config="config"></rich-text-editor>
</template>

<script>
import richTextEditor from 'component/rich-text-editor/rich-text-editor.vue'

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
    richTextEditor
  },
  methods: {

  }
}
</script>
