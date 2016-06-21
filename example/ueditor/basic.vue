<template>
  <p>
    <button :on-click="clear1" size="sm">清空内容</button>
    <button :on-click="changeContent1" size="sm">设置新内容</button>
  </p>
  <ueditor :content="testData.content1" :config="config" :on-change="onEditor1Change"></ueditor>
  <p></p>
  <p>
    <button :on-click="clear2" size="sm">清空内容</button>
    <button :on-click="changeContent2" size="sm">设置新内容</button>
  </p>
  <ueditor :content="testData.content2" :config="config"  :on-change="onEditor2Change"></ueditor>
</template>

<script type="text/babel">
import Ueditor from 'component/ueditor/ueditor.vue'
import Button from 'component/button/button.vue'

export default {
  data() {
    return {
      // 富文本内容
      testData: {
        content1: '',
        content2: '',
//        content1: '<p style="color: red;">这是一段红色富文本</p>',
//        content2: '<p style="color: green;">这是一段绿色富文本</p>',
      },
      // 富文本配置
      config: {
        initialFrameHeight: 100,
      }
    }
  },
  components: {
    Ueditor,
    Button,
  },
  ready () {
    setTimeout(() => {
      this.$set('testData', {
        content1: '<p style="color: red;">这是一段红色富文本</p>',
        content2: '<p style="color: green;">这是一段绿色富文本</p>',
      })
    }, 500)
  },
  methods: {
    onEditor1Change (content) {
      this.testData.content1 = content
      console.log(this.testData.content1)
    },
    onEditor2Change (content) {
      this.testData.content2 = content
      console.log(this.testData.content2)
    },
    clear1 () {
      this.testData.content1 = ''
    },
    clear2 () {
      this.testData.content2 = ''
    },
    changeContent1 () {
      this.testData.content1 = '<p style="color: blue;">我是新内容, 一段蓝色文本</p>'
    },
    changeContent2 () {
      this.testData.content2 = '<p style="color: blue;">我是新内容, 一段蓝色文本</p>'
    },
  }
}
</script>
