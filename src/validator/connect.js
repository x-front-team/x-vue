import { getVue } from './util'

export default function (context, name, validator) {
  if (!(context instanceof getVue())) {
    console.error('only connect to vue')
    return
  }
  context.$set(name, validator)
}

export function connect() {
  // do something
}
