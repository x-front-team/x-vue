import { makeValidations, getVue } from './util'

export default class Validator {
  constructor() {
    this._normalValidations = {}
    this._loopValidations = {}
  }

  addValidator(name, validations) {
    this._normalValidations[name] = makeValidations(validations)
  }
}

export function createForm(fields) {
  let Vue = getVue()
  const vm = new Vue({
    data: {
      status: {}
    }
  })

  let _status = vm.status
  let _status_str = 'status.'

  Object.keys(fields).forEach((key) => {
    vm.$set(_status_str + key, {
      valid: true,
      invalid: false,
      validator (val) {
        console.log(this)
        return !!val.trim()
      }
    })
  })

  return _status
}
