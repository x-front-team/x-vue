<template>

  <div :class="classes">
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
  import fillMixin from '../mixin/prop-fill'

  export default {
    mixins: [fillMixin],
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
        fill: true
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
