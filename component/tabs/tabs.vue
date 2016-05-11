<template>
  <ul :class="classes">
    <li class="nav-item" v-for="item in items" track-by="$index">
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
    data() {
      return {
        items: [],
        active: 0
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
//      items() {
//        return this.$children.map((child, index) => {
//          return {
//            id: child._uid,
//            index,
//            title: child.title,
//            active: child.active,
//            disabled: child.disabled,
//            vue: child
//          }
//        })
//      }
    },
    methods: {
      addItem(item) {
        this.items.push(item)
        return this.items.length - 1
      },
      updateItem(index, item) {
        this.items.$set(index, item)
      },
      changeSelectedItem(item) {
        if (item.disabled || item.active) return

        this.items.forEach((child) => {
//          child.active = false
          child.disSelect()
        })

//        item.active = true

        item.select()
//        this.active = index

//        if (!item.active) {
//          this.items.forEach((child) => {
//            child.vue.active = false
//          })
//          item.vue.active = true
//        }
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
