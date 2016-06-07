<template>
  <div>
    <menu :menus="routes"></menu>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import { routes } from './router'
  import menu from './menu.vue'
  export default {
    data() {
      return {
        routes,
        msg: 'asdasdasda'
      }
    },
    components: {
      menu
    }
  }
</script>
