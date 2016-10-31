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
  render(h) {
    return (
        <div style={{ textAlign: 'center' }}>
          <div>
            <h2>x-drop-down</h2>
            <p>支持left、top、right、bottom、left-start、bottom-end</p>
            <h3>left</h3>
            <x-drop-down label="test" btnType="primary" alignment="left">
              <div slot="content">
                <demo />
              </div>
            </x-drop-down>
            <h3>right</h3>
            <x-drop-down label="test" btnType="primary" alignment="right">
              <div slot="content">
                <demo />
              </div>
            </x-drop-down>
            <h3>top</h3>
            <x-drop-down label="test" btnType="primary" alignment="top">
              <div slot="content">
                <demo />
              </div>
            </x-drop-down>
            <h3>bottom</h3>
            <x-drop-down label="test" btnType="primary" alignment="bottom">
              <div slot="content">
                <demo />
              </div>
            </x-drop-down>
          </div>
        </div>
    )
  }
}