import router, { routes } from './router'
import docMenu from './menu.jsx'

export default {
  router,
  data() {
    return {
      routes,
      msg: 'asdasdasda'
    }
  },
  components: {
    docMenu
  },
  render(h) {
    return (
      <div>
        <doc-menu menus={ this.routes }></doc-menu>
        <div id="container">
          <router-view></router-view>
        </div>
      </div>
    )
  }
}
