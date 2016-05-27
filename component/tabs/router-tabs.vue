<template>
  <ul :class="classes">
    <li class="nav-item" v-for="item in routes" track-by="$index">
      <a href="#"
         v-link="item.path"
         :class="{'nav-link': true, active: item.path === path, disabled: item.disabled}">
        {{item.title}}
      </a>
    </li>
  </ul>
</template>

<script type="text/babel">
  import tabsMixin from './tabs-mixin'
  /**
   * 使用router来控制tab的切换
   */
  export default {
    mixins: [tabsMixin],
    props: {
      routes: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    computed: {
      path() {
        return this.$route.path
      }
    }
  }
</script>
