import Vue from 'vue'
import chai from 'chai'
import jQuery from 'jquery'
import chaiJquery from 'chai-jquery'

chai.use(function (chai, utils) {
  return chaiJquery(chai, utils, jQuery)
})

chai.should()

let el = $(
  `<div id="root">
     <component :is="currentComponent"></component>
   </div>`
)

el.appendTo('body')

const app = new Vue({
  el: '#root',
  data() {
    return {
      tests: [
        'dropDown'
      ],
      current: 0
    }
  },
  computed: {
    currentTest () {
      return this.tests[this.current]
    },
    currentComponent: {
      set (val) {
        let i = this.tests.indexOf(val)
        if (i < 0) {
          throw new Error('Ivalid component: ' + val)
        }
        this.current = i
      },
      get () {
        return 'test-' + this.currentTest
      }
    }
  },
  components: {
    testDropDown: require('../../example/drop-down.vue')
  }
})

window.app = app
window.Vue = Vue

describe('x-vue', function () {

  require('./spec/drop-down')

})
