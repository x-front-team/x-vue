export default {
  bind() {
    const _el = this.el
    // 检查是否是input节点,如果不是,报错
    _el.addEventListener('change', this.doValidate.bind(this))

  },
  update(value) {
    this._value = value
  },
  unbind() {
    this.el.removeEventListener('change', this.doValidate.bind(this))
  },
  doValidate(e) {
    debugger
    console.log(this._value)
    if (typeof this._value === 'function') {
      this._value(e.target.value)
    }
  }
}
