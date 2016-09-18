export default {
  props: {
    type: {
      type: String,
      default: 'tabs'
    }
  },
  computed: {
    classes() {
      let classes = {
        'nav': true,
        'nav-tabs': this.type === 'tabs',
        'nav-pills': this.type === 'pills'
      }
      return classes
    }
  }
}
