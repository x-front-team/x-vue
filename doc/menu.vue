<template>

  <nav id="x-vue-menu">
    <div id="x-vue-title">
      <span>X-VUE</span>
    </div>
    <ul>
      <li v-for="m in menus">
        <a v-link="$key" :class="getClass($key)">{{m.title}}</a>
      </li>
    </ul>
  </nav>

</template>
<style scoped>
  .menu-item.active{
    background-color: white;
  }
</style>
<script type="text/babel">
  export default {
    props: ['menus', 'onChange'],
    methods: {
      getClass(path) {
        return {
          'menu-item': true,
          'active': '/' + path === this.$route.path
        }
      },
      handleClick(menu, e) {
        e.preventDefault()
        this.onChange(menu)
      }
    }
  }
</script>
