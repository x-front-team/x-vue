<template>
  <li class="nav-item" :class="{ active: active }">
    <a class="nav-link" v-bind:href="link">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
