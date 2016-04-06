<template>

  <div class="drop-down">
    <a href="#" class="drop-down-btn" @click="toggle">
      <button class="button" v-if="label" disabled={{disable}}>{{label}}</button>
      <slot v-if="!label" name="btn"></slot>
    </a>
    <div class="drop-down-content" v-show="show" transition="drop">
      <slot></slot>
    </div>
  </div>

</template>

<script type="text/babel">
  import EventListener from '../../util/EventListener'
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      disable: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false
      }
    },
    ready() {
      this._closeListener = EventListener.listen(window, 'click', (e) => {
        if (!this.$el.contains(e.target)) this.show = false
      })
    },
    methods: {
      toggle(e) {
        e.preventDefault()
        this.show = !this.show
      }
    },
    beforeDestory() {
      if (this._closeListener) this._closeListener.remove()
    }
  }
</script>