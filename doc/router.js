import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Index from './index.vue'
import dropDown from '../example/drop-down.vue'

const router = new VueRouter()

export const routes = {
  '/': {
    component: Index,
    title: '首页'
  },
  'drop-down': {
    component: dropDown,
    title: '下拉框'
  }
}

router.map(routes)

export default router
