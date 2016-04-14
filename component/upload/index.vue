<template>
  <div class="upload">
    <span role="button">
      <input v-el:file="file" type="file" style="display: none">
      <button type="button" class="btn btn-ghost" @click="handleClick">
        <i class="icon icon-upload"></i>
        <span>点击上传</span>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$els.file.click()
    }
  }
}
</script>
