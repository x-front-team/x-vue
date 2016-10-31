<template>
  <div class="dropdown">
    <div ref="btn">
      <x-button :type="btnType"
                v-if="label"
                :disabled="disabled"
                :on-click="toggleShow" drop-down>{{label}}
      </x-button>
      <span class="drop-down-btn" @click="toggleShow" v-if="!label">
      <slot name="btn"></slot>
    </span>
    </div>
    <div ref="popper" v-show="isShow" class="dropdown-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script typeof="text/babel">
  import Popper from 'popper.js'

  export default {
    props: {
      // 按扭样式
      btnType: {
        type: String,
        default: ''
      },
      // 按扭文字
      label: {
        type: String,
        default: ''
      },
      // 是否禁用按扭
      disabled: {
        type: Boolean,
        default: false
      },
      // 弹出层对齐方式
      alignment: {
        type: String,
        default: 'bottom'
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    methods: {
      toggleShow() {
        this.isShow = !this.isShow
        if (this.isShow) {
          this.$nextTick(() => {
            new Popper(this.$refs.btn, this.$refs.popper, {
              placement: this.alignment
            })
          })
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dropdown {
    position: relative;
    display: inline-block;
    .dropdown-content {
      /*position: absolute;*/
      &.left {
        left: 0
      }
      &.right {
        right: 0
      }
      &.top {
        bottom: 100%
      }
      &.bottom {
        top: 100%;
      }
    }
  }
</style>