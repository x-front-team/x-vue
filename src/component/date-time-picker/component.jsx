import classnames from 'classnames'
import DateTimePicker from './date-time-picker.vue'
import { formatDate, parseDateTime } from './util'
import EventListener from '../../util/EventListener'
import { getBodyScrollTop } from '../../util/dom'
import { extend } from '../../util'

function dateNumber (val) {
  val = parseDateTime(val)
  if (isNaN(val)) {
    return -1
  }
  return val
}

export default {
  functional: true,
  data() {
    return {
      style: {},
      rect: {}
    }
  },
  watch: {
    show(val) {
      // if val === true, update rect
      if (val) this.updateRect()
    }
  },
  computed: {
    classNames() {
      return classnames('vue-date-time-picker-default-input', this.classes)
    }
  },
  methods: {
    handleChange(val) {
      this.onChange(formatDate(val, this.format))
      if (!this.forceControl && this.closeOnSelected) {
        this.show = false
      }
    },
    handleFocus() {
      this.show = true
    },
    updateRect() {
      let rect = this.$els.input.getBoundingClientRect()
      let bodyScrollTop = getBodyScrollTop()

      this.rect = {
        left: rect.left + document.body.scrollLeft,
        right: rect.right,
        top: rect.top + bodyScrollTop,
        bottom: rect.bottom,
        width: rect.width || this.el.clientWidth,
        height: rect.height || this.el.clientHeight
      }
    }
  },
  mounted() {
    this._picker = this.$refs.picker
    if (this._picker.parentNode) {
      this._picker.parentNode.removeChild(this._picker)
    }
    global.document.body.appendChild(this._picker)

    if (!this.forceControl) {
      let _closeListener = EventListener.listen(window, 'click', (e) => {
        if (!this.$els.input.contains(e.target)) {
          this.show = false
        }
      })

      let _closePickerListener = EventListener.listen(this._picker, 'click', (e) => {
        e.stopPropagation()
      })

      this._removeListener = () => {
        _closeListener.remove()
        _closePickerListener.remove()
      }
    }
  },
  beforeDestroy() {
    this._picker.parentNode.removeChild(this._picker)
    if (this._removeListener) this._removeListener()
  },
  components: {
    DateTimePicker
  },
  render(h, context) {
    let props = extend({}, context.props, {})

    return (
      <div>
        <div v-el:input class="vue-date-time-picker-target">
          <slot>
            <input type="text"
            readonly="readOnly"
            class={this.classNames}
            on-focus={this.handleFocus}
            value={this.value} />
          </slot>
        </div>
        <div v-el:picker>
          <transition name="drop">
            <date-time-picker {...props}
              ref="picker"
              on-change={this.handleChange}></date-time-picker>
          </transition>
        </div>
      </div>
    )
  }
}
