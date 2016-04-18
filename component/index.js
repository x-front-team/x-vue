// button
import XButton from './button/button.vue'

// card
import XCard from './card/card.vue'
import XCardTitle from './card/card-title.vue'
import XCardText from './card/card-text.vue'
import XCardLink from './card/card-link.vue'
import XCardBlock from './card/card-block.vue'

export const components = {
  XButton,

  XCard,
  XCardTitle,
  XCardText,
  XCardLink,
  XCardBlock
}

export default {

  install(Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name])
    })
  }

}
