import Vue from 'vue'
import menu from './menu.vue'
import dropDown from '../example/drop-down.vue'

require('../style/index.scss')
require('./doc.scss')

new Vue({
  el: '#root',
  data() {
    return {
      components: [
        {
          label: 'drop-down',
          value: 'dropDown'
        }
      ],
      currentComponent: 'dropDown'
    }
  },
  components: {
    menu,

    // example components
    dropDown
  },
  methods: {
    setMenu(menu) {
      this.currentComponent = menu.value
    }
  }
})
