<template>
  <ul :class="classes">
    <li class="nav-item" v-for="item in routes" track-by="$index">
      <a href="#"
         v-link="item.path"
         :class="{'nav-link': true, active: item.active, disabled: item.disabled}">
        {{item.title}}
      </a>
    </li>
  </ul>
</template>

<script type="text/babel">
  /**
   * 使用router来控制tab的切换
   */
  export default {
    props: {
      routes: {
        type: Array,
        default: []
      }
    }
  }
</script>
