<template>
  <div>
    <doc-menu :menus="routes[0].children"></doc-menu>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
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
    }
  }
</script>
