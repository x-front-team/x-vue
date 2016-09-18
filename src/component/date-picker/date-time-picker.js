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
import { formatDate, parseDateTime } from './util'

import EventListener from '../../util/EventListener'
import { getBodyScrollTop } from '../../util/dom'

const parseDirective = Vue.parsers.directive.parseDirective
const { createAnchor, after, on, off } = Vue.util

const template = '<date-time-picker ' +
  ':rect="rect" ' +
  ':min-date="minDate" ' +
  ':start-date="startDate" ' +
  ':end-date="endDate" ' +
  ':max-date="maxDate" ' +
  'v-show="show" ' +
  'transition="drop" ' +
  ':on-change="onChange" ' +
  ':on-complete="onComplete" ' +
  ':highlight-today="highlightToday" ' +
  ':format="format"' +
  ':align="align"' +
  ':value="value"></date-time-picker>'

const body = document.querySelector('body')
const REGEX_FILTER = /[^|]\|[^|]/

const Component = Vue.extend({
  template,
  components: {
    dateTimePicker
  }
})

const RANGE_CONTROL = new Vue()

// real directive
export default {

  params: [
    'value',
    'format',
    'default',
    'highlightToday',
    'closeOnSelected',
    'maxDate',
    'minDate',
    'align'  // 对齐,left or right
  ],

  paramWatchers: {
    highlightToday: function (val) {
      this.__vm.highlightToday = !!val
    },
    minDate: function (val) {
      this.__vm.minDate = parseDateTime(val)
    },
    maxDate: function (val) {
      this.__vm.maxDate = parseDateTime(val)
    }
  },

  bind: function () {
    // console.log(this.params)
    const el = this.el
    let _range = this.modifiers
    let _rangeName = this.expression

    // get v-model attr
    let raw = el.getAttribute('v-model')
    let { model } = this.parseModelRaw(raw)
    this.model = model
    this.params.format = this.params.format || 'yyyy-MM-dd'
    this.isDateEnabled = /yyyy|MM|dd/.test(this.params.format)

    // create date picker Vue instance
    this.__vm = this.createVm()
    this.setVmValue()

    // create start and end anchor to help insert picker into body end
    let startAnchor = createAnchor('date time picker start')
    let endAnchor = createAnchor('date time picker end')

    // // insert to body end
    after(startAnchor, body.lastChild)
    after(endAnchor, startAnchor)

    // 设置range属性
    if (_range.start) {
      this.isStart = true
    } else if (_range.end) {
      this.isEnd = true
    }

    if ((this.isStart || this.isEnd) && !_rangeName) {
      return
    }

    if (this.isStart || this.isEnd) {
      this.doWithRange()
    }

    // watch model, model变化重新设置组件的value
    this.watchModel()

    // do mount
    this.__vm.$mount()
    this.__vm.$before(endAnchor)
    this.__vm.$el = this.__vm.$el.childNodes[0]

    // 根据目标节点绑定事件控制控件显示
    this.bindEvent()

  },

  unbind: function () {
    if (this._removeEventBind) {
      this._removeEventBind()
    }

    if (this._removeRangeControl) this._removeRangeControl()

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
    let value = this.vm.$get(this.model || '')
    if (!value) {
      return
    }
    let seconds = parseDateTime(value)
    if (!isNaN(seconds)) {
      this.__vm.value = seconds
    }
  },

  // bind events to toggle date time picker
  bindEvent() {

    const focusCb = () => {
      // TODO:这样的定位方式存在一些缺陷
      // 如果存在局部滚动,在局部滚动的时候就会出现错位
      let rect = this.el.getBoundingClientRect()
      let bodyScrollTop = getBodyScrollTop()
      this.__vm.$set('rect', {
        left: rect.left + document.body.scrollLeft,
        right: rect.right,
        top: rect.top + bodyScrollTop,
        bottom: rect.bottom,
        width: rect.width || this.el.clientWidth,
        height: rect.height || this.el.clientHeight
      })
      this.__vm.show = true
    }

    let self = this

    // important: 使用vm.$mount生成的节点,给vm设置的$el是一个注释节点<!-- v start -->
    // 只有使用nextElementSibling来获取模板生成的节点
    const _closeListener = EventListener.listen(window, 'click', (e) => {
      // if (self.el &&
      //   !self.el.contains(e.target) &&
      //   self.__vm.$el &&
      //   !self.__vm.$el.contains(e.target)) self.__vm.show = false
      if (e.target !== this.el) self.__vm.show = false
    })

    const _closeEleListener = EventListener.listen(this.__vm.$el, 'click', (e) => {
      e.stopPropagation()
    })

    // const _closeTargetListener = EventListener.listen(this.el, 'click', (e) => {
    //   e.stopPropagation()
    // })

    on(this.el, 'focus', focusCb)

    // on(this.el, 'blur', () => {
    //   this.__vm.show = false
    // })

    this._removeEventBind = function () {
      off(this.el, 'focus', focusCb)
      _closeListener.remove()
      _closeEleListener.remove()
      // _closeTargetListener.remove()
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
        value: null,
        highlightToday: _this.params.highlightToday,
        align: _this.params.align,
        minDate: parseDateTime(this.params.minDate) || -1,
        maxDate: parseDateTime(this.params.maxDate) || -1,
        format: _this.params.format,
      },
      methods: {
        onChange: function (value) {
          this.value = parseDateTime(value)
        },
        onComplete: function (value) {
          value = value || new Date()
          // 如果设置了在选择时关闭则设置show为false
          if (_this.params.closeOnSelected !== false) {
            this.show = false
          }
          // set value to modle
          if (_this.model) {
            _this.vm.$set(_this.model, formatDate(value, _this.params.format))
          } else {
            _this.el.value = formatDate(value, _this.params.format)
          }
          // 如果有设置range时间的方法,则执行
          // 只通过判断是否有该方法判断是否是range
          if (_this.setRangeTime) _this.setRangeTime(value)
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
  },

  /**
   * put this into range control
   * listen to range change to control picker to control range
   */
  doWithRange() {
    let rc = RANGE_CONTROL
    let rangeName = this.expression
    let rangeType = this.isStart ? 'start' : 'end'
    let rangeOtherType = this.isStart ? 'end' : 'start'
    // debugger
    let initModel = this.vm.$get(this.model || '')
    let initDate = parseDateTime(initModel)
    //
    Vue.set(this.__vm, rangeOtherType + 'Date', -1)
    // 初始化
    if (!rc[rangeName]) {
      Vue.set(rc, rangeName, {
        start: -1,
        end: -1
      })
    }
    //      expression     start      startValue
    // 给range中间vue对象中的自己设置初始值
    // 等待range所有组件初始化完毕
    Vue.nextTick(() => {
      Vue.set(rc[rangeName], rangeType, initDate || -1)
    })
    let unWatchRange = rc.$watch(rangeName + '.' + rangeOtherType, (newVal) => {
      // if (newVal[rangeOtherType] !== oldVal[rangeOtherType]) {
        // 设置 this.__vm相关的数据
      this.__vm[rangeOtherType + 'Date'] = newVal
      // }
    }, { deep: true })
    this.setRangeTime = function (time) {
      rc[rangeName][rangeType] = time
    }
    this._removeRangeControl = function () {
      unWatchRange()
      if (rc[rangeName]) {
        // Vue.delete(rc, rangeName)
        rc[rangeName] = null
      }
    }
  }

}
