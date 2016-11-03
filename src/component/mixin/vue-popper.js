import PopperJS from 'popper.js'

export default {
  props: {
    placement: {  // popper 出现的位置
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {  // 相对定位节点的padding
      type: Number,
      default: 5
    },
    reference: {},  // 可以手动指定触发节点
    popper: {},     // 可以手动指定弹出节点
    offset: {       // 定位
      default: 0
    },
    show: Boolean, // 控制是否显示
    visibleArrow: Boolean,   // 是否有箭头
    transition: String,  // 动画效果
    appendToBody: {  // 是否把节点放置到body下
      type: Boolean,
      default: true
    },
    options: {    // 自定义popper.js的配置
      type: Object,
      default() {
        return {
          gpuAcceleration: false
        }
      }
    }
  },

  data() {
    return {
      showPopper: false
    }
  },

  watch: {
    show: {
      immediate: true,
      handler(val) {
        console.log(val)
        this.showPopper = val
        this.$emit('input', val)
      }
    },

    showPopper(val) {
      if (val) this.updatePopper()
      else this.destroyPopper()
      this.$emit('input', val)
    }
  },

  methods: {
    createPopper() {
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
        return
      }

      const options = this.options
      const popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper
      let reference =
        this.referenceElm =
          this.referenceElm || this.reference || this.$refs.reference

      if (!reference &&
        this.$slots.reference &&
        this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm
      }
      if (!popper || !reference) return
      if (this.visibleArrow) this.appendArrow(popper)
      if (this.appendToBody) document.body.appendChild(this.popperElm)
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy()
      }

      options.placement = this.placement
      options.offset = this.offset
      this.popperJS = new PopperJS(reference, popper, options)
      this.popperJS.onCreate(_ => {
        this.$emit('created', this)
        this.resetTransformOrigin()
        this.$nextTick(this.updatePopper)
      })
      // this.popperJS._popper.style.zIndex = PopupManager.nextZIndex()
    },

    updatePopper() {
      if (this.popperJS) this.popperJS.update()
      else this.createPopper()
    },

    doDestroy() {
      /* istanbul ignore if */
      if (this.showPopper || !this.popperJS) return
      this.popperJS.destroy()
      this.popperJS = null
    },

    destroyPopper() {
      if (this.popperJS) {
        this.resetTransformOrigin()
      }
    },

    // 改变transform,通过popper的x-placement来判断
    resetTransformOrigin() {
      let placementMap = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' }
      let placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0]
      let origin = placementMap[placement]
      this.popperJS._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1
        ? `center ${origin}`
        : `${origin} center`
    },

    appendArrow(element) {
      let hash
      if (this.appended) {
        return
      }

      this.appended = true

      let item
      let keys = Object.keys(element.attributes)
      for (let i=0; i<keys.length; i += 1) {
        item = element.attributes[keys[i]]
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name
          break
        }
      }

      const arrow = document.createElement('div')

      if (hash) {
        arrow.setAttribute(hash, '')
      }
      arrow.setAttribute('x-arrow', '')
      arrow.className = 'popper__arrow'
      element.appendChild(arrow)
    }
  },

  beforeDestroy() {
    this.doDestroy()
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      document.body.removeChild(this.popperElm)
    }
  }
}
