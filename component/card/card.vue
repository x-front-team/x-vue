<template>

  <div :class="classes">
    <img :class="card-img-top" data-src="..." alt="Card image cap" v-if="image">
    <div class="card-header" v-if="(header && header !== true) || header === true">
      {{header === true ? null : header}}
      <slot name="header"></slot>
    </div>
    <slot></slot>
    <div class="card-footer" v-if="(footer && footer !== true) || footer === true">
      {{footer === true ? null : footer}}
      <slot name="footer"></slot>
    </div>
  </div>

</template>

<script type="text/babel">
  export default {
    props: {
      type: { // primary success info warning danger
        type: String,
        default: ''
      },
      header: [String, Boolean],
      footer: [String, Boolean],
      image: {
        type: String,
        default: ''
      },
      block: {
        type: Boolean,
        default: false
      },
      align: {
        type: String,
        default: ''
      }
    },
    computed: {
      classes() {
        let classes = {
          'card': true,
          'card-block': this.block
        }
        if (this.align) {
          classes['text-xs-' + this.align] = true
        }
        if (this.type) {
          classes['card-' + this.type] = true
          classes['card-inverse'] = true
        }
        return classes
      }
    }
  }
</script>
