<template>

  <div :class="classes">
    <img :class="card-img-top" data-src="..." alt="Card image cap" v-if="image">
    <div class="card-header" v-if="header">
      {{header === true ? null : header}}
      <slot name="header"></slot>
    </div>
    <div class="card-block">
      <slot></slot>
    </div>
    <div class="card-footer" v-if="footer">
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
      header: {
        type: String,
        default: ''
      },
      footer: {
        type: String,
        default: ''
      },
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
