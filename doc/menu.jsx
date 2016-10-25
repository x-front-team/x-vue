export default {
  props: ['menus', 'onChange'],
  methods: {
    getClass(path) {
      return {
        'menu-item': true,
        'active': path === this.$route.path
      }
    },
    handleClick(menu, e) {
      e.preventDefault()
      this.onChange(menu)
    },
    goTo(e, path) {
      // console.log(e)
      // debugger
      e.preventDefault()
      this.$router.push(path)
    }
  },
  render(h) {
    return (
      <nav id="x-vue-menu">
        <div id="x-vue-title">
          <span>X-VUE</span>
        </div>
        <ul>
          {
            this.menus.map((menu) => {
              return (
                <li>
                  <a href={ menu.path }
                     on-click={ (e) => this.goTo(e, menu.path) }
                     class={ this.getClass(menu.path) }>{ menu.title }</a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
}
