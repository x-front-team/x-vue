export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    handleClose() {
      this.show = false
    }
  },
  render(h) {
    return (
      <div>
        {
          this.show ?
            <x-alert closeBtn={true} onClose={this.handleClose} effect="fade">
              click to close
            </x-alert> :
            null
        }
      </div>
    )
  }
}
