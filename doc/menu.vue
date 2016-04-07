<template>

  <nav id="x-vue-menu">
    <div id="x-vue-title">
      <span>X-VUE</span>
    </div>
    <ul>
      <li v-for="m in menus">
        <a href="#" @click="handleClick(m, $event)" class="menu-item">{{m.label}}</a>
      </li>
    </ul>
  </nav>

</template>
<style lang="sass" scoped rel="stylesheet/scss">

</style>
<script type="text/babel">
  export default {
    props: ['menus', 'onChange'],
    methods: {
      handleClick(menu, e) {
        e.preventDefault()
        this.onChange(menu)
      }
    }
  }
</script>
