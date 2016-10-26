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
        <x-button type="success">success</x-button>
        <x-button type="info">info</x-button>
        <x-button type="danger">danger</x-button>
        <x-button type="warning">warning</x-button>
        <x-button type="secondary">secondary</x-button>
        <x-button type="link">link</x-button>
      </div>
    )
  }
}
