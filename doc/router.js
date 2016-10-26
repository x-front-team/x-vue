import VueRouter from 'vue-router'
import Vue from 'vue'
// import App from './app.vue'

import Index from './index.jsx'
import DropDown from '../example/drop-down.doc'
import Modal from '../example/modal.doc'
import Pagination from '../example/pagination.doc'
import Button from '../example/button.doc'
import Card from '../example/card.doc'
import Navbar from '../example/navbar.doc'
// import Menu from '../example/menu.doc'
import Tabs from '../example/tabs.doc'
import Alert from '../example/alert.doc'
// import Validator from '../example/validator.doc'

// import DateTimePicker from '../example/date-time-picker.doc'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/index',
    component: Index,
    title: '首页'
  },
  {
    path: '/button',
    component: Button,
    title: 'Button'
  },
  {
    path: '/alert',
    component: Alert,
    title: 'Alert'
  },
  {
    path: '/dropdown',
    component: DropDown,
    title: 'DropDown'
  },
  {
    path: '/pagination',
    component: Pagination,
    title: 'Pagination'
  },
  {
    path: '/card',
    component: Card,
    title: 'Card'
  },
  {
    path: '/navbar',
    component: Navbar,
    title: 'Navbar'
  },
  {
    path: '/modal',
    component: Modal,
    title: 'Modal'
  },
  {
    path: '/tabs',
    component: Tabs,
    title: 'Tabs'
  },
  //
  // 'menu': {
  //   component: Menu,
  //   title: 'Menu'
  // },
  //
  // 'tabs': {
  //   component: Tabs,
  //   title: 'Tab'
  // },
  //
  // 'date-time-picker': {
  //   component: DateTimePicker,
  //   title: '日期时间'
  // },
  // 'validator': {
  //   component: Validator,
  //   title: '验证器'
  // }
]

// router.map(routes)

const router = new VueRouter({
  routes
})

console.log(router)

export default router
