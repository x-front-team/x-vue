<template>
  <ul :class="classes">
    <li class="nav-item" v-for="item in items" track-by="id">
      <a href="#"
         @click.prevent="changeSelectedItem(item)"
         :class="{'nav-link': true, active: item.active, disabled: item.disabled}">
        {{item.title}}
      </a>
    </li>
  </ul>
  <div class="tab-content">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    props: {
      type: {
        type: String,
        default: 'tabs'
      }
    },
    ready() {
      let flag = this.items.reduce((result, item) => {
        return result || item.active
      }, false)
      if (!flag) {
        this.items[0].vue.active = true
      }
    },
    computed: {
      classes() {
        let classes = {
          'nav': true,
          'nav-tabs': this.type === 'tabs',
          'nav-pills': this.type === 'pills'
        }
        return classes
      },
      items() {
        return this.$children.map((child, index) => {
          return {
            id: child._uid,
            index,
            title: child.title,
            active: child.active,
            disabled: child.disabled,
            vue: child
          }
        })
      }
    },
    methods: {
      changeSelectedItem(item) {
        if (!item.active) {
//          this.items.forEach((child) => {
//            child.vue.active = false
//          })
          item.vue.active = true
        }
      },
      setSelectedItem(son) {
        this.items.forEach((child) => {
          if (child !== son) {
            child.vue.active = false
          }
        })
      }
    }
  }
</script>
