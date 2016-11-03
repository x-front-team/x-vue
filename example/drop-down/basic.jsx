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
      drops: [false, false, false, false]
    }
  },
  methods: {
    toggle(index) {
      this.$set(this.drops, index, !this.drops[index])
    }
  },
  render(h) {
    return (
        <div>
          <div>
            <h2>x-drop-down</h2>
            <p>支持left、top、right、bottom、left-start、bottom-end</p>
            <h3>left</h3>
            <x-drop-down label="test"
                         show={this.drops[0]}
                         onTrigger={this.toggle.bind(this, 0)}
                         btnType="primary"
                         placement="left">
                <demo />
            </x-drop-down>
            <h3>right</h3>
            <x-drop-down label="test"
                         show={this.drops[1]}
                         onTrigger={this.toggle.bind(this, 1)}
                         btnType="primary"
                         placement="right">
                <demo />
            </x-drop-down>
            <h3>top</h3>
            <x-drop-down label="test"
                         show={this.drops[2]}
                         onTrigger={this.toggle.bind(this, 2)}
                         btnType="primary"
                         placement="top">
                <demo />
            </x-drop-down>
            <h3>bottom</h3>
            <x-drop-down label="test"
                         show={this.drops[3]}
                         onTrigger={this.toggle.bind(this, 3)}
                         btnType="primary"
                         placement="bottom">
                <demo />
            </x-drop-down>
          </div>
        </div>
    )
  }
}
