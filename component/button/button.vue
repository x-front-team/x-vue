<template>
  <button v-bind:class="classes" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script type="text/babel">
  export default {
    props: {
      type: { // primary success info secondary danger warning link
        type: String,
        default: 'secondary'
      },
      outline: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ''
      },
      block: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      onClick: {
        type: Function,
        default: function () {}
      },
      dropDown: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classes() {
        let classes = {
          'btn': true,
          'btn-block': this.block,
          'dropdown-toggle': this.dropDown
        }
        let type = 'btn-'
        if (this.type) {
          type += this.type
          if (this.outline) {
            type += '-outline'
          }
          classes[type] = true
        }
        if (this.size) {
          classes['btn-' + this.size] = true
        }
        return classes
      }
    },
    methods: {
      handleClick(e) {
        this.onClick(e)
      }
    }
  }
</script>
