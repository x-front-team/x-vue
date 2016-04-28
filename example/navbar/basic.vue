<template>
  <navbar>
    <a class="navbar-brand" href="#">Navbar</a>
    <navbar-nav>
      <nav-item link="http://baidu.com">
        Home <span class="sr-only">(current)</span>
      </nav-item>
      <nav-item :active="true">Features</nav-item>
      <nav-item>Pricing</nav-item>
    </navbar-nav>
    <form class="form-inline pull-xs-right">
      <input class="form-control" type="text" placeholder="Search">
      <button class="btn btn-success-outline" type="submit">Search</button>
    </form>
  </navbar>
</template>

<script>
import navbar from 'component/navbar'
import { navbarNav, navItem } from 'component/navbar'

export default {
  components: {
    navbar,
    navbarNav,
    navItem
  }
}
</script>
