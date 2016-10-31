export default {
  data() {
    return {
      menu: [{
        label: 'test1'
      }, {
        label: 'test2'
      }, {
        divider: true
      }, {
        label: 'test3'
      }]
    }
  },
  methods: {
    menuItemHandleClick(arg) {
      console.log(arg)
    }
  },
  render(h) {
    return (
        <div style={{ textAlign: 'center' }}>
          <div>
            <h2>x-drop-down-menu</h2>
            <br/><br/><br/>
            <h3>left</h3>
            <x-drop-down-menu
                label="test"
                btnType="danger"
                alignment="left"
                domProps-menuItemHandleClick={ this.menuItemHandleClick }
                domProps-menu={ this.menu }/>
            <h3>right</h3>
            <x-drop-down-menu
                label="test"
                btnType="danger"
                alignment="right"
                domProps-menuItemHandleClick={ this.menuItemHandleClick }
                domProps-menu={ this.menu }/>
            <h3>top</h3>
            <x-drop-down-menu
                label="test"
                btnType="danger"
                alignment="top"
                domProps-menuItemHandleClick={ this.menuItemHandleClick }
                domProps-menu={ this.menu }/>
            <h3>bottom</h3>
            <x-drop-down-menu
                label="test"
                btnType="danger"
                alignment="bottom"
                domProps-menuItemHandleClick={ this.menuItemHandleClick }
                domProps-menu={ this.menu }/>
          </div>
          <br/><br/><br/><br/><br/>
        </div>
    )
  }
}