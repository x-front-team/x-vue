import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Index from './index.vue'
import dropDown from '../example/drop-down.vue'
import Button from '../example/button.doc'

const router = new VueRouter()

export const routes = {
  '/': {
    component: Index,
    title: '首页'
  },
  'drop-down': {
    component: dropDown,
    title: '下拉框'
  },
  'button': {
    component: Button,
    title: '按钮'
  }
}

router.map(routes)

export default router
