export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    showModal () {
      this.isShow = true
    }
  },
  render(h) {
    return (
      <div>
        <p>
          <x-button onClick={this.showModal} type="primary" size="sm">弹出</x-button>
          <p class="text-muted">size有sm,md,lg, 默认md</p>
        </p>
        <x-modal show={this.isShow} size="lg" title="This is title">
          <div>
            <p style="color: red;">这是模态框内容</p>
          </div>
        </x-modal>
      </div>
    )
  }
}
