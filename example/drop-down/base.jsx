export default {
  components: {
    demo: {
      render(h) {
        return (
          <div>
            <div style={{
              width: '200px',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              borderRadius: '3px',
            }}>
              这时百测试内容 <br/>
              这时百测试内容 <br/>
              这时百测试内容 <br/>
              这时百测试内容 <br/>
            </div>
          </div>
        )
      }
    }
  },
  data() {
    return {
      show: false,
      showSlot: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  },
  render(h) {
    return (
      <div>
        <div>
          <x-drop-down label="test"
                       btnType="primary"
                       show={this.show}
                       onTrigger={this.toggle}
                       onEscape={ () => { this.show = false } }
                       placement="left">
            <demo />
          </x-drop-down>
          <x-drop-down show={this.showSlot}
                       onEscape={ () => { this.showSlot = false } }
                       placement="left">
            <x-button type="primary"
                      slot="trigger"
                      onClick={() => { this.showSlot = !this.showSlot }}>{'slot example'}</x-button>
            <demo />
          </x-drop-down>
        </div>
      </div>
    )
  }
}
