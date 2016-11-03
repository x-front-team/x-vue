export default {
  name: 'example-drop-down-menu',
  data() {
    return {
      show: false,
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
    },
    trigger() {
      // console.log('triggered')
      this.show = !this.show
    }
  },
  render(h) {
    return (
        <div>
          <div>
            <x-drop-down-menu
                label="test"
                btnType="danger"
                show={this.show}
                onTrigger={ this.trigger }
                onItemClick={ this.menuItemHandleClick }
                options={this.menu}/>
          </div>
        </div>
    )
  }
}
