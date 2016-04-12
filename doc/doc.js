import Vue from 'vue'
import menu from './menu.vue'
import dropDown from '../example/drop-down.vue'
import pagination from '../example/pagination.vue'
import upload from '../example/upload.vue'

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
        },
        {
          label: 'pagination',
          value: 'pagination'
        },
        {
          label: 'upload',
          value: 'upload'
        }
      ],
      currentComponent: 'upload'
    }
  },
  components: {
    menu,

    // example components
    dropDown,

    pagination,

    upload
  },
  methods: {
    setMenu(menu) {
      this.currentComponent = menu.value
    }
  }
})
