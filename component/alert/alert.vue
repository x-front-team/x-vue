<template>
  <div :class="classes" :transition="effect">
    <button type="button" class="close" v-if="closeBtn" @click.prevent="handleClose">
      <span>&times;</span>
    </button>
    <slot>
      {{msg}}
    </slot>
  </div>
</template>

<script type="text/babel">
  import classnames from 'classnames'
  export default {
    props: {
      msg: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info' // success, info, warning, danger
      },
      closeBtn: {
        type: Boolean,
        default: false
      },
      onClose: {
        type: Function
      },
      effect: {
        type: String,
        default: ''
      }
    },
    computed: {
      classes() {
        return classnames('alert', {
          [`alert-${this.type}`]: true,
          'alert-dismissible': this.closeBtn
        })
      }
    },
    methods: {
      handleClose() {
        if (this.onClose && typeof this.onClose === 'function') this.onClose()
      }
    }
  }
</script>
