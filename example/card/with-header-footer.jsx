export default {
  data() {
    return {
      src: 'http://xpos-img-test.b0.upaiyun.com/shop_banner/default/050c177f99997f85b5fec077b896c0df.jpg!s13'
    }
  },
  render(h) {
    return (
      <x-card header="This is header" footer="This is footer">
        <x-card-block>
          <x-card-title>This is card title</x-card-title>
          <x-card-title sub>This is card subtitle</x-card-title>
        </x-card-block>
        <x-card-image src={this.src}></x-card-image>
        <x-card-block>
          <x-card-text>this is card text</x-card-text>
          <x-card-link>link</x-card-link>
        </x-card-block>
      </x-card>
    )
  }
}
