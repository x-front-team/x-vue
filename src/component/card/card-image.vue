<template>
  <div>
    <transition name="fade">
      <img :src="src"
           :class="{'card-img-top': top, 'card-image': true}"
           alt="Card image cap"
           v-if="loaded">
    </transition>
    <div v-if="!loaded">
      <loading></loading>
    </div><!-- 替换成loading组件 -->
  </div>
</template>

<style scoped>
  .card-image{
    width : 100%;
  }
</style>

<script type="text/babel">
  import Loading from '../loading/loading.jsx'

  const loadImage = function _loadImage (src) {
    return new Promise((resolve, reject) => {
      let image = new global.Image()

      image.onload = () => {
        resolve()
      }

      image.onerror = () => {
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

    components: {
      Loading
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
