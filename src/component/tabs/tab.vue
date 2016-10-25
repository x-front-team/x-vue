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
      index: {},
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
    created() {
      this.$parent.addItem(this.item)
    },
    computed: {
      show() {
//        console.log(this.$parent.active, this.index)
        return this.index === this.$parent.active
      },
      item() {
        return {
          title: this.title,
          disabled: this.disabled,
          index: this.index
        }
      }
    },
    methods: {
      handleClick(e) {
        e.preventDefault()
        this.onClick(e)
      }
    }
  }
</script>
