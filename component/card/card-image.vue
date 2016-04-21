<template>
  <img :src="src" :class="{'card-img-top': top, 'card-image': true}" alt="Card image cap" v-if="loaded" transition="fade">
  <div v-if="!loaded">loading placeholder</div><!-- 替换成loading组件 -->
</template>

<style scoped>
  .card-image{
    width : 100%;
  }
</style>

<script type="text/babel">

  const loadImage = function (src) {
    return new Promise(function (resolve, reject) {
      let image = new Image()

      image.onload = function () {
        resolve()
      }

      image.onerror = function () {
        reject()
      }

      image.src = src

    })
  }

  export default {
    props: {
      src: {
        type: String,
        default: ''
      },
      top: {
        fill: true
      }
    },

    data() {
      return {
        loaded: false
      }
    },

    created() {
      loadImage(this.src).then(() => {
        this.loaded = true
      }).catch(() => {
        this.loaded = false
      })
    }

  }
</script>
