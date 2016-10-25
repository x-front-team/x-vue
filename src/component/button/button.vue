<template>
  <button :class="classNames" :disabled="disabled" @click="handleClick" type="button">
    <slot></slot>
  </button>
</template>

<script type="text/babel">
//  import propFill from '../mixin/prop-fill'
  import cx from 'classnames'

  export default {
//    mixins: [propFill],
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
        default() {}
      },
      dropDown: {
        type: Boolean,
        default: false
      },
      classes: [String, Array, Object]
    },
    computed: {
      classNames() {
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
        return cx(classes, this.classes)
      }
    },
    methods: {
      handleClick(e) {
        this.onClick(e)
      }
    }
  }
</script>
