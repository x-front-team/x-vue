<template>
  <h4 :class="classes" v-if="!sub">
    <slot></slot>
  </h4>
  <h6 :class="classes" v-if="sub">
    <slot></slot>
  </h6>
</template>

<script type="text/babel">
  import fillMixin from '../mixin/prop-fill'

  export default {
    mixins: [fillMixin],
    props: {
      sub: {
        fill: true
      }
    },
    computed: {
      classes() {
        return {
          'card-title': !this.sub,
          'card-subtitle': this.sub,
          'text-muted': this.sub
        }
      }
    }
  }
</script>
