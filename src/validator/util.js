// let Vue
import Vue from 'vue'

// export function bindVue(vue) {
//   Vue = vue
// }

export function getVue() {
  return Vue
}

// function reduceObject(obj, fun, initResult) {
//   let keys = Object.keys(obj)
//   return keys.reduce(fun, initResult)
// }

const defaultValidations = {
  required (value) {
    return typeof value === 'string' && value.trim().length > 0
  }
}

export function makeValidations() {
  return (val) => {
    if (defaultValidations.required(val)) {
      return true
    } else {
      throw new Error('必须填写')
    }
  }
}
