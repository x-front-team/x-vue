import Vue from 'vue'
import chai from 'chai'
import jQuery from 'jquery'
import chaiJquery from 'chai-jquery'
import path from 'path'
import _ from 'lodash'

chai.use((chai, utils) => {
  return chaiJquery(chai, utils, jQuery)
})

chai.should()
chai.expect

const demos = require.context('../../example', true, /\.vue$/)

function getBaseName(dpath) {
  let baseName = path.basename(dpath)
  return _.lowerCase(_.camelCase(baseName.substr(0, baseName.lastIndexOf('.'))))
}

function getLasePath(dpath) {
  let fullPath = path.dirname(dpath)
  return _.lowerCase(_.camelCase(fullPath.substr(fullPath.lastIndexOf('/'), fullPath.length - 1)))
}

function getTemplates(paths) {
  return paths.reduce((result, p) => {
    return result + '<' + _.kebabCase(getLasePath(p) + ' ' + getBaseName((p))) + '/>'
  }, '')
}

function getComponents(paths, context) {
  return paths.reduce((result, p) => {
    result[_.camelCase(getLasePath(p) + ' ' + getBaseName(p))] = context(p)
    return result
  }, {})
}

const componentsTemplate = getTemplates(demos.keys())

let el = $(
  `<div id="root">
    ${componentsTemplate}
   </div>`
)

el.appendTo('body')

const app = new Vue({
  el: '#root',
  components: getComponents(demos.keys(), demos)
})

window.app = app
window.Vue = Vue
window.expect = chai.expect

describe('x-vue', () => {
  const testsContext = require.context('./demo_spec', false, /\.js$/)
  testsContext.keys().forEach(testsContext)
})
