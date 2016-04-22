<template>

  <x-tabs :type="type">
    <x-tab title="tab1" transition="fade" :active="selected === 1">This is Tab1</x-tab>
    <x-tab title="tab2" transition="fade" :active="selected === 2">This is Tab2</x-tab>
    <x-tab title="tab3" transition="fade" :active="selected === 3">This is Tab3</x-tab>
  </x-tabs>

  <div>
    <span>tab类型:</span>
    <input type="radio" value="tabs" v-model="type"> tabs
    <input type="radio" value="pills" v-model="type"> pills
  </div>

  <div>
    <span>选中tab:</span>
    <input type="radio" value="1" number v-model="selected"> tab1
    <input type="radio" value="2" number v-model="selected"> tab2
    <input type="radio" value="3" number v-model="selected"> tab3
  </div>

</template>
<style lang="sass" rel="stylesheet/scss">
  .tab-content {
    padding : 20px;
  }
</style>
<script type="text/babel">
  export default {
    data() {
      return {
        type: 'tabs',
        selected: 1
      }
    }
  }
</script>
