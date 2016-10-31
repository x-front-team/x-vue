// button
import XButton from './component/button/button.vue'

// modal
import XModal from './component/modal/modal.vue'

// card
import XCard from './component/card/card.vue'
import XCardTitle from './component/card/card-title.vue'
import XCardText from './component/card/card-text.vue'
import XCardLink from './component/card/card-link.vue'
import XCardBlock from './component/card/card-block.vue'
import XCardImage from './component/card/card-image.vue'

// drop down
import XDropDown from './component/drop-down/drop-down.vue'
import XDropDownMenu from './component/drop-down/drop-down-menu.vue'
import XDropDownMenuDivider from './component/drop-down/drop-down-menu-divider.vue'
import XDropDownMenuItem from './component/drop-down/drop-down-menu-item.vue'

// tabs
import XTabs from './component/tabs/tabs.vue'
import XTab from './component/tabs/tab.vue'
import XRouterTabs from './component/tabs/router-tabs.vue'

// date picker
import XDatePicker from './component/date-picker/date-picker.vue'
import XDateTimePicker from './component/date-picker/date-time-picker.vue'

// nav
import XNavBar from './component/navbar/index.vue'
import XNavBarBrand from './component/navbar/navbar-brand.vue'
import XNavItem from './component/navbar/nav-item.vue'
import XNavBarNav from './component/navbar/navbar-nav.vue'
import XNavGroup from './component/navbar/nav-group.vue'

// pagination
import XPagination from './component/pagination/index.vue'

// alert
import XAlert from './component/alert/alert.vue'
import XAlertLink from './component/alert/alert-link.vue'
import XAlertHeader from './component/alert/alert-heading.vue'

// Menu
import XMenu from './component/menu/menu.vue'
import XMenuItem from './component/menu/menu-item.vue'

// directives
// import DateTimePicker from './component/date-picker/date-time-picker'

// ueditor
// import Ueditor from './component/ueditor/ueditor.vue'

export const components = {
  XButton,

  XModal,

  XCard,
  XCardTitle,
  XCardText,
  XCardLink,
  XCardBlock,
  XCardImage,

  XDropDown,
  XDropDownMenu,
  XDropDownMenuDivider,
  XDropDownMenuItem,

  XTabs,
  XTab,
  XRouterTabs,

  XDatePicker,
  XDateTimePicker,

  XNavBar,
  XNavBarBrand,
  XNavItem,
  XNavBarNav,
  XNavGroup,

  XPagination,

  XAlert,
  XAlertLink,
  XAlertHeader,

  XMenu,
  XMenuItem

  // Ueditor,
}

// export const directives = {
//   DateTimePicker
// }

export default {

  install(Vue) {
    Vue.X_VUE_VERSION = process.env.X_VUE_VERSION
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name])
    })
    // Object.keys(directives).forEach((name) => {
    //   Vue.directive(name, directives[name])
    // })
  }

}

require('./style/index.styl')
// import '../style/index.styl'
