export default {
  props: {
    // 按扭样式
    btnType: {
      type: String,
      default: 'primary'
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
