import Vue from 'vue'
import dropdown from './dropdown.vue'

require('../style/index.scss')

new Vue({
  el: '#root',
  template: `
    <div>
      <dropdown></dropdown>
    </div>
  `,

  components: {
    dropdown
  }
})
