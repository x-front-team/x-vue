<template>
  <div :class="{'tab-pane': true, active: active}"
       v-show="show"
       transition-mode="out-in"
       :transition="transition">
    <slot></slot>
  </div>

</template>

<script type="text/babel">
  import propType from '../mixin/prop-fill'
  export default {
    mixins: [propType],
    props: {
      // 从外部强制改变现实状态
      // 需要调用父方法设置该tab显示
      active: {
        fill: true
      },
      title: {
        type: String,
        default: ''
      },
      transition: {
        type: String,
        default: ''
      },
      disabled: {
        fill: true
      }
    },
    data() {
      return {
        show: false,
        index: 0
      }
    },
    created() {

      this.index = this.$parent.addItem(this.item)

      this.unWatchActive = this.$watch('active', () => {
        this.$parent.updateItem(this.index, this.item)
      })
//      this.show = this.active
    },
    computed: {
      show() {
        return this.active
      },
      item() {
        return {
          title: this.title,
          disabled: this.disabled,
          active: this.active,
          select: () => {
            this.active = true
          },
          disSelect: () => {
            this.active = false
          }
        }
      }
    },
    beforeDestroy() {
      this.unWatchActive()
    },
    methods: {
      handleClick(e) {
        e.preventDefault()
        this.onClick(e)
      }
    }
  }
</script>
