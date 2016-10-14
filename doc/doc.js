import Vue from 'vue'
import XVue from '../src'

Vue.config.debug = true

import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/css/font-awesome.css'
import '../src/style/index.styl'
import './doc.styl'
import 'highlight.js/styles/default.css'
import 'highlight.js/styles/monokai-sublime.css'

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

