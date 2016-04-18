import Vue from 'vue'
import XVue from '../component'

require('../style/index.scss')
require('./doc.scss')
require('bootstrap/scss/bootstrap.scss')
require('highlight.js/styles/default.css')
require('highlight.js/styles/monokai-sublime.css')

// import card from '../component/card/card.vue'
// import cardTitle from '../component/card/card-title.vue'
// import cardText from '../component/card/card-text.vue'
// import cardBlock from '../component/card/card-block.vue'
import codePanel from './code-panel.vue'
//
// Vue.component('card', card)
// Vue.component('card-title', cardTitle)
// Vue.component('card-text', cardText)
// Vue.component('card-block', cardBlock)
Vue.component('code-panel', codePanel)

Vue.use(XVue)


import router from './router'
import App from './app.vue'

router.start(App, '#root')


