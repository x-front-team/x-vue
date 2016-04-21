// button
import XButton from './button/button.vue'

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


export const components = {
  XButton,

  XCard,
  XCardTitle,
  XCardText,
  XCardLink,
  XCardBlock,
  XCardImage,

  XDropDown,
  XDropDownMenu,
  XDropDownMenuDivider,
  XDropDownItem
}

export default {

  install(Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name])
    })
  }

}
