// button
import XButton from './button/button.vue'

//modal
import XModal from './modal/modal.vue'

// card
import XCard from './card/card.vue'
import XCardTitle from './card/card-title.vue'
import XCardText from './card/card-text.vue'
import XCardLink from './card/card-link.vue'
import XCardBlock from './card/card-block.vue'
import XCardImage from './card/card-image.vue'

// drop down
import XDropDown from './drop-down/drop-down.vue'
import XDropDownMenu from './drop-down/drop-down-menu.vue'
import XDropDownMenuDivider from './drop-down/drop-down-menu-divider.vue'
import XDropDownItem from './drop-down/drop-down-menu-item.vue'

// tabs
import XTabs from './tabs/tabs.vue'
import XTab from './tabs/tab.vue'
import XRouterTabs from './tabs/router-tabs.vue'

// date picker
import XDatePicker from './date-picker/date-picker.vue'
import XDateTimePicker from './date-picker/date-time-picker.vue'

// nav
import XNavBar from './navbar/index.vue'
import XNavBarBrand from './navbar/navbar-brand.vue'
import XNavItem from './navbar/nav-item.vue'
import XNavBarNav from './navbar/navbar-nav.vue'
import XNavGroup from './navbar/nav-group.vue'

// pagination
import XPagination from './pagination/index.vue'

// directives
import DateTimePicker from './date-picker/date-time-picker'

// ueditor
import Ueditor from './ueditor/ueditor.vue'

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
  XDropDownItem,

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

  Ueditor,
}

export const directives = {
  DateTimePicker
}

export default {

  install(Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name])
    })
    Object.keys(directives).forEach((name) => {
      Vue.directive(name, directives[name])
    })
  }

}
