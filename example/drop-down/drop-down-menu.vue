<template>
  <x-drop-down-menu
          label="drop down menu"
          :items="items"
          item-label="label"
          btn-type="primary"></x-drop-down-menu>
</template>

<script>
  export default {
    data: function () {
      return {
        items: [
          {
            label: 'item1'
          },
          {
            divider: true
          },
          {
            label: 'disabled item',
            disabled: true
          }
        ]
      }
    },
    methods: {
      handleClick(e, item) {
        console.log(e, item)
      }
    }
  }
</script>
