import ChevronLeft from '../../src/component/svg-icon/chevron-left.vue'

export default {
  components: {
    ChevronLeft
  },
  render(h) {
    return (
      <div class="button-example" id="x-vue-button-demo-base">
        <x-button type="primary">
          <chevron-left size={20}></chevron-left>
        </x-button>
        <x-button type="success">
          <chevron-left size={20}></chevron-left>
        </x-button>
        <x-button type="info">
          <chevron-left size={20}></chevron-left>
        </x-button>
        <x-button type="danger">
          <chevron-left size={20}></chevron-left>
        </x-button>
        <x-button type="warning">
          <chevron-left size={20}></chevron-left>
        </x-button>
        <x-button type="secondary">
          <chevron-left size={20}></chevron-left>
        </x-button>
        <x-button type="link">
          <chevron-left size={20}></chevron-left>
        </x-button>
      </div>
    )
  }
}
