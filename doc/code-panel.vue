<template>
  <x-card :header="true">
    <div slot="header">
      <span>{{filename}}</span>
      <a href="#" class="float-right" @click="toggleCode">&lt;&gt;</a>
    </div>
    <x-card-block>
      <slot name="demo"></slot>
    </x-card-block>
    <div class="code-container" v-show="showCode" transition="drop">
      <slot name="code"></slot>
    </div>
  </x-card>

</template>

<style>
  .code-container{
    background-color: black;
    padding: 20px;
  }
  .float-right{
    float: right
  }
</style>

<script>
  import xButton from '../component/button/button.vue'
  export default {
    components: {
      xButton
    },
    data: function () {
      return {
        showCode: false
      }
    },
    props: ['filename'],
    methods: {
      toggleCode(e) {
        e.preventDefault()
        this.showCode = !this.showCode
      }
    }
  }
</script>
