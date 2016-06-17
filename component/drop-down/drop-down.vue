<template>

  <div class="dropdown">
    <x-button :type="btnType" v-if="label" :disabled="disabled" @click="toggleShow" drop-down>{{label}}</x-button>
    <span class="drop-down-btn" @click="toggleShow" v-if="!label">
      <slot name="btn"></slot>
    </span>
    <div :class="{'drop-down-content': true, 'open': true, 'left': position === 'left'}" v-show="isShow" transition="drop">
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
  import xButton from '../button/button.vue'
  import EventListener from '../../util/EventListener'
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
      }
    },
    data() {
      return {
        show: false
      }
    },
    computed: {
      isShow() {
        if (this.toggle) {
          return this.show
        } else {
          return this.showDropDown
        }
      }
    },
    methods: {
      toggleShow(e) {
        e.preventDefault()
        if (!this.toggle) {
          this.show = true
        } else {
          this.show = !this.show
        }
        this.showDropDown = true
      }
    },
    ready() {
      if (this.closeOnLoseFocus) {
        this._closeListener = EventListener.listen(window, 'click', (e) => {
          if (this.$el && !this.$el.contains(e.target)) {
            this.showDropDown = false
            this.show = false
          }
        })
      }
    },
    beforeDestroy() {
      if (this._closeListener) this._closeListener.remove()
    }
  }
</script>
