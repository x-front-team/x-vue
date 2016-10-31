<template>
  <div v-el:input class="vue-date-time-picker-target">
    <slot>
        <input type="text"
               :readonly="readOnly"
               :class="classNames"
               @focus="handleFocus"
               :value="value">
    </slot>
  </div>
  <div v-el:picker>
    <date-time-picker :on-change="handleChange"
                      transition="drop"
                      v-show="show"
                      :value="value | dateNumber"
                      :start-date="startDate | dateNumber"
                      :end-date="endDate | dateNumber"
                      :min-date="minDate | dateNumber"
                      :max-date="maxDate | dateNumber"
                      :format="format"
                      :rect="rect"
                      :align="align"
                      :highlight-today="highlightToday"></date-time-picker>
  </div>
</template>

<script type="text/babel">
  import DateTimePicker from './date-time-picker.vue'
  import { formatDate, parseDateTime } from './util'
  import EventListener from '../util/EventListener'
  import { getBodyScrollTop } from '../util/dom'
  import classnames from 'classnames'

  export default {
    props: {
      onChange: {
        type: Function,
        default: function () {}
      },
      show: {  // single, use to control picker show or not
        type: Boolean,
        default: false
      },
      highlightToday: {
        type: Boolean,
        default: true
      },
      readOnly: { // set default input to read only
        type: Boolean,
        default: true
      },
      value: {},
      closeOnSelected: {
        type: Boolean,
        default: true
      },
      classes: {},
      startDate: {},
      endDate: {},
      forceControl: {
        type: Boolean,
        default: false
      },
      minDate: {},
      maxDate: {},
      format: {
        type: String,
        default: 'yyyy-MM-dd'
      },
      align: {
        type: String,
        default: 'left'
      }
    },
    data() {
      return {
        style: {},
        rect: {}
      }
    },
    watch: {
      show(val) {
        // if val === true, update rect
        if (!!val) this.updateRect()
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
    ready() {
      this._picker = this.$els.picker
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

        this._removeListener = function () {
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
    filters: {
      dateNumber: function (val) {
        val = parseDateTime(val)
        if (isNaN(val)) {
          return -1
        }
        return val
      }
    }
  }
</script>

<style>
  .vue-date-time-picker-default-input{
    width: 100%;
  }
</style>
