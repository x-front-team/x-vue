/*
  learn from vue-mdl https://github.com/posva/vue-mdl/blob/develop/src/mixins/prop-fill.js
 */

// When declaring a prop with no value it should be evaluated to true
// but '' is falsy. As a solution add the
export default {
  beforeCompile () {
    for (let prop of Object.keys(this._props)) {
      let data = this._props[prop]
      if (data.options.fill && data.raw === '') {
        this[prop] = prop
      }
    }
  }
}
