import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

import Index from './index.vue'
import dropDown from '../example/drop-down.doc'
import pagination from '../example/pagination.doc'
import upload from '../example/upload.doc'
import Button from '../example/button.doc'
import Card from '../example/card.doc'
import Navbar from '../example/navbar.doc'
import Menu from '../example/menu.doc'
import Tabs from '../example/tabs.doc'
import UEdtior from '../example/ueditor.doc'

import DateTimePicker from '../example/date-time-picker.doc'

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
  },

  'button': {
    component: Button,
    title: '按钮'
  },

  'card': {
    component: Card,
    title: '卡片'
  },

  'navbar': {
    component: Navbar,
    title: 'Navbar'
  },

  'menu': {
    component: Menu,
    title: 'Menu'
  },

  'tabs': {
    component: Tabs,
    title: 'Tab'
  },

  'date-time-picker': {
    component: DateTimePicker,
    title: '日期时间'
  },
  'ueditor': {
    component: UEdtior,
    title: '富文本编辑器'
  },
}

router.map(routes)

export default router
