<template>
  <a :href="link" class="card-link" @click="onClick">
    <slot></slot>
  </a>
</template>

<script type="text/babel">
  export default {
    props: {
      link: {
        type: String,
        default: '#'
      },
      onClick: {
        type: Function,
        default: function () {}
      }
    }
  }
</script>
