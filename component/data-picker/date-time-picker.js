import Vue from 'vue'

Vue.directive('date-time-picker', {

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
   * // 非核心功能
   * default: 默认时间,在bind中给vm设置这个值
   *
   * lang: 国际化
   */
  params: ['format', 'default'],

  bind: function () {
    const _date = new Date()
  }

})
