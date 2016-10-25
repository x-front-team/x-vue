<template>
  <drop-down
          v-el:drop
          :label="label"
          :disabled="disabled"
          :btn-type="btnType || 'primary'">
    <div class="dropdown-menu">
      <template v-for="item in items">
        <item
                v-if="!item.divider"
                :disabled="item.disabled"
                @click="handleItemClick($event, item)">{{item[itemLabel]}}</item>
        <menu-divider v-if="item.divider"></menu-divider>
      </template>
    </div>
  </drop-down>
</template>

<script type="text/babel">
  import dropDown from './drop-down.vue'
  import item from './drop-down-menu-item.vue'
  import menuDivider from './drop-down-menu-divider.vue'
  import dropDownMixin from '../mixin/drop-down-mixin'

  export default {
    mixins: [dropDownMixin],
    data() {
      return {
        show: false
      }
    },
    props: {
      /**
       * [item, item...]
       * {
       *    label: String,
       *    value: Everything,
       *    disabled: Boolean,
       *    divider: Boolean // if true it is a divider
       * }
       */
      items: {
        type: Array,
        default: []
      },
      // which key in item should show
      itemLabel: {
        type: String,
        default: ''
      },
      onItemClick: {
        type: Function,
        default(e) {
          e.preventDefault()
        }
      }
    },
    components: {
      dropDown,
      item,
      menuDivider
    },
    methods: {
      handleItemClick(e, clickedItem) {
        this.$els.drop.__vue__.show = false
        this.onItemClick(e, clickedItem)
      }
    }
  }
</script>
