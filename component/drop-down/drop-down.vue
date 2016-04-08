<template>

  <div class="drop-down">
    <a href="#" class="drop-down-btn" @click="toggle">
      <button class="button" v-if="label" disabled={{disable}}>{{label}}</button>
      <slot v-if="!label" name="btn"></slot>
    </a>
    <div class="drop-down-content" v-show="show" transition="drop">
      <slot></slot>
    </div>
  </div>

</template>

<script type="text/babel">
  import EventListener from '../../util/EventListener'
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      disable: {
        type: Boolean,
        default: false
      },
      // 是否在失去焦点时关闭
      // OK
      closeOnLoseFocus: {
        type: Boolean,
        default: true
      },
      // 显示按钮的形态
      // NO
      btnType: {
        type: String,
        default: 'default'
      },
      // drop down显示的位置
      // NO
      position: {
        type: String,
        default: 'right'
      },
      // 点击按钮是否切换drop down状态
      // NO
      toggle: {
        type: Boolean,
        default: true
      },
      // 监听show的变化,如果有变化表示外部强制drop down是否显示
      // NO
      show: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false
      }
    },
    ready() {
      if (this.closeOnLoseFocus) {
        this._closeListener = EventListener.listen(window, 'click', (e) => {
          if (!this.$el.contains(e.target)) this.show = false
        })
      }
    },
    methods: {
      toggle(e) {
        e.preventDefault()
        this.show = !this.show
      }
    },
    beforeDestory() {
      if (this._closeListener) this._closeListener.remove()
    }
  }
</script>
