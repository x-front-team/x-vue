<template>
  <menu>
    <menu-item>导航一</menu-item>
    <menu-item>导航二</menu-item>
    <menu-item>导航 - 子菜单</menu-item>
    <menu-item>导航四 - 链接</menu-item>
  </menu>
</template>

<script>
import Menu, { MenuItem } from 'component/menu'

export default {
  components: {
    Menu,
    MenuItem
  }
}
</script>
