<template>
  <navbar>
    <nav-group>
      <a class="navbar-brand" href="#">Navbar</a>
      <navbar-nav>
        <nav-item link="http://baidu.com">Home</nav-item>
        <nav-item :active="true">Features</nav-item>
        <nav-item>Pricing</nav-item>
      </navbar-nav>
    </nav-group>
    <nav-group float=right>
      <form class="form-inline">
        <input class="form-control" type="text" placeholder="Search">
        <button class="btn btn-success-outline" type="submit">Search</button>
      </form>
    </nav-group>
  </navbar>
</template>

<script>
import Navbar, { NavbarNav, NavGroup, NavItem } from 'component/navbar'

export default {
  components: {
    Navbar,
    NavbarNav,
    NavItem,
    NavGroup
  }
}
</script>
