<template>
  <div>
    <ul :class="classes">
      <li class="nav-item" v-for="item in items" track-by="$index">
        <a href="#"
           @click.prevent="changeSelectedItem(item)"
           :class="{'nav-link': true, active: item.index === active, disabled: item.disabled}">
          {{item.title}}
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  import tabsMixin from './tabs-mixin'

  export default {
    mixins: [tabsMixin],
    props: ['active'],
    data() {
      return {
        items: [],
        index: 0
      }
    },
    ready() {
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
//        if (item.disabled || item.active) return
//
//        this.items.forEach((child) => {
//          child.disSelect()
//        })
//
//        item.select()
        this.active = item.index
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
