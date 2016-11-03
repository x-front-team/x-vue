export default {
  props: {
    // 按扭样式
    btnType: {
      type: String,
      default: ''
    },
    // 按扭文字
    label: {
      type: String,
      default: ''
    },
    // 是否禁用按扭
    disabled: {
      type: Boolean,
      default: false
    },
    // 弹出层对齐方式
    alignment: { // start end
      type: String,
      default: 'end'
    },
    placement: {  // top right bottom left
      type: String,
      default: 'bottom'
    },
    onTrigger: {
      type: Function,
      default: () => {}
    },
    onEscape: {
      type: Function,
      default: () => {}
    }
  }
}
