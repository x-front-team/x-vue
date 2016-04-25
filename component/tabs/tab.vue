<template>
  <div :class="{'tab-pane': true, active: show}"
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
        show: false
      }
    },
    created() {
      this.unWatchActive = this.$watch('active', (newVal) => {
        if (newVal) {
          this.$parent.setSelectedItem(this)
        }
      })
      this.show = this.active
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
