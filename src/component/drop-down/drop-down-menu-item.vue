<template>
  <a class="dropdown-item" @click="onClick(params, $event)" :href="href">
    <slot></slot>
  </a>
</template>

<script type="text/babel">
  export default {
    props: {
      href: {
        type: String,
        default: '#'
      },
      onClick: {
        type: Function
      },
      params: {
        type: Object
      }
    },
  }
</script>
