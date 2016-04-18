<template>
  <button v-bind:class="classes" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script type="text/babel">
  import propFill from '../mixin/prop-fill'
  export default {
    mixins: [propFill],
    props: {
      type: { // primary success info secondary danger warning link
        type: String,
        default: 'secondary'
      },
      outline: {
        fill: true
      },
      size: {
        type: String,
        default: ''
      },
      block: {
        fill: true
      },
      disabled: {
        fill: true
      },
      onClick: {
        type: Function,
        default: function () {}
      },
      dropDown: {
        fill: true
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
