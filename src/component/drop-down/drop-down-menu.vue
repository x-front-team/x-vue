<template>
  <x-drop-down :label="label" :disabled="disabled" :btn-type="btnType" :alignment="alignment">
    <div class="dropdown-menu" slot="content">
      <template v-for="(item, index) in menu">
        <x-drop-down-menu-item
                v-if="!item.divider"
                :on-click="menuItemHandleClick"
                :params="{index: index, item: item}"
                :href="'#'">{{item.label}}
        </x-drop-down-menu-item>
        <x-drop-down-menu-divider v-if="item.divider"></x-drop-down-menu-divider>
      </template>
    </div>
  </x-drop-down>
</template>

<script type="text/babel">
  export default {
    props: {
      label: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      btnType: {
        type: String,
        default: 'primary'
      },
      menu: {
        type: Array,
        default: []
      },
      alignment: {
        type: String,
        default: 'bottom'
      },
      menuItemHandleClick: {
        type: Function
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dropdown-menu-wrap {
    overflow: hidden;
  }

  .dropdown-menu {
    display: block;
    position: static;
  }
</style>