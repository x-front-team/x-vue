<template>
  <x-router-tabs :routes="routes"></x-router-tabs>
</template>

<script type="text/babel">
  export default {
    data: function () {
      return {
        routes: [
          {
            path: '/card',
            title: '卡片'
          },
          {
            path: '/tabs',
            title: 'Tabs'
          },
          {
            path: '/drop-down',
            title: '下拉框'
          }
        ]
      }
    }
  }
</script>
