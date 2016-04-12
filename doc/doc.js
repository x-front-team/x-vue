import Vue from 'vue'
import menu from './menu.vue'
// import dropDown from '../example/drop-down.vue'

require('../style/index.scss')
require('./doc.scss')

import card from '../component/card/card.vue'
import cardTitle from '../component/card/card-title.vue'
import cardText from '../component/card/card-text.vue'
import cardBlock from '../component/card/card-block.vue'

Vue.component('card', card)
Vue.component('card-title', cardTitle)
Vue.component('card-text', cardText)
Vue.component('card-block', cardBlock)

new Vue({
  el: '#root',
  // data() {
  //   return {
  //     components: [
  //       {
  //         label: 'drop-down',
  //         value: 'dropDown'
  //       }
  //     ],
  //     currentComponent: 'dropDown'
  //   }
  // },
  components: {
    menu
    // example components
    // dropDown
  },
  // methods: {
  //   setMenu(menu) {
  //     this.currentComponent = menu.value
  //   }
  // }
})

import router from './router'
import App from './app.vue'

router.start(App, '#root')


