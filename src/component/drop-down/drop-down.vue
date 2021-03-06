<template>

  <div class="dropdown">
    <x-button :type="btnType"
              v-if="label"
              :disabled="disabled"
              @click="toggleShow"
              drop-down>{{label}}</x-button>
    <span class="drop-down-btn" @click="toggleShow" v-if="!label">
      <slot name="btn"></slot>
    </span>
    <div :class="classes"
         v-show="isShow"
         :style="styl"
         v-el:content
         :transition="effect">
      <slot></slot>
    </div>
  </div>

</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .left{
    left: auto !important;
    right: 0;
  }
  .drop-down-btn{
    cursor: pointer;
  }
</style>

<script type="text/babel">
  import classnames from 'classnames'
  import xButton from '../button/button.vue'
  import EventListener from '../../util/EventListener'
//  import Vue from 'vue'
  import { getBodyScrollTop } from '../../util/dom'

  export default {
    components: {
      xButton
    },
    props: {
      label: {
        type: String,
        default: ''
      },
      disabled: {
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
      // OK
      btnType: {
        type: String,
        default: ''
      },
      // drop down显示的位置
      // left or right
      position: {
        type: String,
        default: 'right'
      },
      // 点击按钮是否切换drop down状态
      // OK
      toggle: {
        type: Boolean,
        default: true
      },
      // 监听show的变化,如果有变化表示外部强制drop down是否显示
      // OK
      showDropDown: {
        type: Boolean,
        default: false,
        twoWay: true
      },
      // 解决失去焦点时需要进行一些操作的问题
      onLoseFocus: {
        type: Function,
        default: () => {}
      },
      classNames: {
        default: ''
      }
    },
    data() {
      return {
        show: false,
        width: 0,
        height: 0,
        effect: 'drop',
        styl: {}
      }
    },
    watch: {
      isShow(value) {
        if (value) {
          let style = {}
          let rect = this.$el.getBoundingClientRect()
          let scrollTop = getBodyScrollTop()
          style.top = rect.bottom + scrollTop + 'px'
          if (this.position === 'left') {
            style.right = document.body.clientWidth - rect.right + 'px'
          } else {
            style.left = rect.left + 'px'
          }
          this.$set('styl', style)
        }
      }
    },
    computed: {
      isShow() {
        if (this.toggle) {
          return this.show
        }
        return this.showDropDown
      },
      classes() {
        return classnames('drop-down-content open', this.classNames)
      }
    },
    methods: {
      toggleShow(e) {
        e.preventDefault()
        if (!this.disabled) {
          if (!this.toggle) {
            this.show = true
          } else {
            this.show = !this.show
          }
          this.showDropDown = true
        }
      }
    },
    ready() {
      let el = this.contentEl = this.$els.content
      if (this.closeOnLoseFocus) {
        this._closeListener = EventListener.listen(window, 'click', (e) => {
          if ((this.$el && this.$el.contains(e.target)) ||
                  (this.contentEl && this.contentEl.contains(e.target))) {
            console.log('')
          } else {
            this.showDropDown = false
            this.show = false
          }
        })
      }
      if (el.parentNode) {
        el.parentNode.removeChild(el)
      }
      global.document.body.appendChild(el)
    },
    beforeDestroy() {
      if (this._closeListener) this._closeListener.remove()
      if (this.contentEl) this.contentEl.parentNode.removeChild(this.contentEl)
    }
  }
</script>
