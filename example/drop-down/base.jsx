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
      show: false
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
        </div>
      </div>
    )
  }
}
