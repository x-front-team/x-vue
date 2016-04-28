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

const FragmentFactory = Vue.FragmentFactory
const parseDirective = Vue.parsers.directive.parseDirective
const { createAnchor, after, on, off } = Vue.util

const template = '<date-time-picker ' +
  ':rect="rect" ' +
  'v-show="show" ' +
  'transition="drop" ' +
  ':on-change="onChange" ' +
  ':highlight-today="highlightToday" ' +
  'value="value"></date-time-picker>'

const body = document.querySelector('body')
const REGEX_FILTER = /[^|]\|[^|]/

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

    // create start and end anchor to help insert picker into body end
    this.startAnchor = createAnchor('date time picker start')
    this.endAnchor = createAnchor('date time picker end')

    // create date time picker fragment
    const factory = new FragmentFactory(this.__vm, template)
    this.dtpFrag = factory.create(this._host, this._scope, this._frag)

    // insert to body end
    after(this.startAnchor, body.lastChild)
    after(this.endAnchor, this.startAnchor)
    this.dtpFrag.before(this.endAnchor)

    this.bindEvent()

  },

  unbind: function () {
    if (this._removeEventBind) {
      this._removeEventBind()
    }

    // destroy the fragment object
    this.dtpFrag = null
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

    // const blurCb = () => {
    //   this.__vm.show = false
    // }

    on(this.el, 'focus', focusCb)

    // on(this.el, 'blur', blurCb)

    this._removeEventBind = function () {
      off(this.el, 'focus', focusCb)
      // off(this.el, 'blur', blurCb)
    }

  },

  // create date-time-picker Vue instance with init data and components
  createVm() {

    const _this = this
    return new Vue({
      components: {
        dateTimePicker
      },
      data: {
        show: false,
        rect: {},
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
