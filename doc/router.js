import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Index from './index.vue'
import dropDown from '../example/drop-down.vue'
import pagination from '../example/pagination.vue'
import upload from '../example/upload.vue'

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

  'pagination': {
    component: pagination,
    title: '分页'
  },

  'upload': {
    component: upload,
    title: '上传'
  }
}

router.map(routes)

export default router
