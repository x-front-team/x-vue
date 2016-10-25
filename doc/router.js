import VueRouter from 'vue-router'
import Vue from 'vue'
// import App from './app.vue'

import Index from './index.jsx'
import DropDown from '../example/drop-down.doc'
// import Modal from '../example/modal.doc'
// import pagination from '../example/pagination.doc'
// import Button from '../example/button.doc'
// import Card from '../example/card.doc'
// import Navbar from '../example/navbar.doc'
// import Menu from '../example/menu.doc'
// import Tabs from '../example/tabs.doc'
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
    path: '/alert',
    component: Alert,
    title: 'Alert'
  },
  {
    path: '/dropdown',
    component: DropDown,
    title: 'DropDown'
  }
  // title: '首页'
  // 'drop-down': {
  //   component: DropDown,
  //   title: '下拉框'
  // },
  //
  // 'pagination': {
  //   component: pagination,
  //   title: '分页'
  // },
  //
  // 'button': {
  //   component: Button,
  //   title: '按钮'
  // },
  //
  // 'card': {
  //   component: Card,
  //   title: '卡片'
  // },
  //
  // 'navbar': {
  //   component: Navbar,
  //   title: 'Navbar'
  // },
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
  //
  // 'modal': {
  //   component: Modal,
  //   title: '模态框',
  // },
  //
  // 'alert': {
  //   component: Alert,
  //   title: 'alert'
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
