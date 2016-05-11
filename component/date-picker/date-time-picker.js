/**
 * // 核心功能
 * format: YYYY-MM-DD HH:mm:ss
 * 如果有DD, 则整个Date picker都显示
 * 如果没有根据最近的一个现实picker
 * 时间类似
 *
 * v-date-time-picker:range.start="name"
 * argument: range // 这是一个range时间选择
 * modifiers: {start: true, end: false} // 代表这是一个range的开始选择
 * expression: name  // 代表这个range的名字,每个名字的range只能有一个start和end,不然报错
 * value: name代表的值
 *
 * closeOnSelected: Boolean default true
 * 是否在选择完了之后关闭选择器
 *
 * highlightToday: Boolean default true
 * 当前日期是否高亮
 *
 * weekStart: 0-6 代表 周日到周六
 *
 * method: focus or click
 *
 * // 非核心功能
 * default: 默认时间,在bind中给vm设置这个值
 *
 * lang: 国际化
 */

import Vue from 'vue'

import dateTimePicker from './date-time-picker.vue'
import { formatDate } from './util'

import EventListener from '../../util/EventListener'

const parseDirective = Vue.parsers.directive.parseDirective
const { createAnchor, after, on, off } = Vue.util

const template = '<date-time-picker ' +
  ':rect="rect" ' +
  'v-show="show" ' +
  'transition="drop" ' +
  ':on-change="onChange" ' +
  ':highlight-today="highlightToday" ' +
  ':value="value"></date-time-picker>'

const body = document.querySelector('body')
const REGEX_FILTER = /[^|]\|[^|]/

const Component = Vue.extend({
  template,
  components: {
    dateTimePicker
  }
})

// real directive
export default {

  params: ['format', 'default', 'highlightToday', 'closeOnSelected'],

  paramWatchers: {
    highlightToday: function (val) {
      this.__vm.highlightToday = val
    }
  },

  bind: function () {
    const el = this.el

    // get v-model attr
    let raw = el.getAttribute('v-model')
    let { model } = this.parseModelRaw(raw)
    this.model = model

    // create date picker Vue instance
    this.__vm = this.createVm()
    this.setVmValue()

    // create start and end anchor to help insert picker into body end
    let startAnchor = createAnchor('date time picker start')
    let endAnchor = createAnchor('date time picker end')

    // // insert to body end
    after(startAnchor, body.lastChild)
    after(endAnchor, startAnchor)


    debugger
    this.__vm.$mount()
    this.__vm.$before(endAnchor)

    // 根据目标节点绑定事件控制控件显示
    this.bindEvent()
    // watch model, model变化重新设置组件的value
    this.watchModel()

  },

  unbind: function () {
    if (this._removeEventBind) {
      this._removeEventBind()
    }

    // destroy the fragment object
    this.dtpFrag = null
  },

  /*
   * watch this.vm[model], 如果变化则改变this.__vm.value
   */
  watchModel() {
    if (!this.model) return
    this.vm.$watch(this.model, () => {
      this.setVmValue()
    })
  },

  /*
   * 根据父vm的model的值设置value
   */
  setVmValue() {
    let seconds = Date.parse(this.vm[this.model])
    if (!isNaN(seconds)) {
      this.__vm.value = seconds
    }
  },

  // bind events to toggle date time picker
  bindEvent() {

    const focusCb = () => {
      let rect = this.el.getBoundingClientRect()
      this.__vm.$set('rect', {
        left: rect.left,
        right: rect.right,
        top: rect.top,
        bottom: rect.bottom,
        width: rect.width || this.el.clientWidth,
        height: rect.height || this.el.clientHeight
      })
      this.__vm.show = true
    }

    let self = this

    // important: 使用vm.$mount生成的节点,给vm设置的$el是一个注释节点<!-- v start -->
    // 只有使用nextElementSibling来获取模板生成的节点
    const _closeListener = EventListener.listen(window, 'click', function (e) {
      if (self.el &&
        !self.el.contains(e.target) &&
        self.__vm.$el &&
        !self.__vm.$el.contains(e.target)) self.__vm.show = false
    })

    on(this.el, 'focus', focusCb)

    this._removeEventBind = function () {
      off(this.el, 'focus', focusCb)
      _closeListener.remove()
    }

  },

  // create date-time-picker Vue instance with init data and components
  createVm() {

    const _this = this
    let vm = new Component({
      replace: false,
      data: {
        show: false,
        rect: {},
        value: 0,
        highlightToday: _this.params.highlightToday
      },
      methods: {
        onChange: function (value) {
          // 如果设置了在选择时关闭则设置show为false
          if (_this.params.closeOnSelected !== false) {
            this.show = false
          }

          // set value to modle
          if (_this.model) {
            _this.vm[_this.model] = formatDate(value, _this.params.format || 'yyyy-MM-dd')
          } else {
            _this.el.value = formatDate(value, _this.params.format || 'yyyy-MM-dd')
          }

        }
      }
    })

    return vm

  },

  parseModelRaw (raw) {
    if (REGEX_FILTER.test(raw)) {
      let parsed = parseDirective(raw)
      return { model: parsed.expression, filters: parsed.filters }
    } else {
      return { model: raw }
    }
  }

}
