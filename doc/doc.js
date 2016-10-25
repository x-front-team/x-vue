import Vue from 'vue'

// Vue.config.debug = true

import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/css/font-awesome.css'
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/tomorrow.css'

import XVue from '../src'
import '../src/style/index.styl'
import './doc.styl'

import App from './app.jsx'

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


// import router from './router'
console.log(App)

// router.start(App, '#root')
new Vue(App).$mount('#root')

