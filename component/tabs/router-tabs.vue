<template>
  <ul :class="classes">
    <li class="nav-item" v-for="item in items" track-by="id">
      <a href="#"
         @click.prevent="handleChange(item)"
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
      routers: {
        type: Array,
        default: []
      }
    }
  }
</script>
