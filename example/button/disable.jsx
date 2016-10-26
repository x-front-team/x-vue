export default {
  data() {
    return {
      isDisabled: false
    }
  },
  methods: {
    disableButton() {
      this.isDisabled = !this.isDisabled
    }
  },
  render(h) {
    return (
      <div class="button-example" id="x-vue-button-demo-base">
        <x-button type="primary" disabled={this.isDisabled}>primary</x-button>
        <x-button type="success" on-click={this.disableButton}>toggle it</x-button>
      </div>
    )
  }
}
