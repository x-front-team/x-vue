import dropDownMixin from './drop-down-mixin'

export default {
  name: 'x-drop-down-menu',
  mixins: [dropDownMixin],
  functional: true,   // functional component don't support register component
  render(h, context) {
    let {
      options, onItemClick, ...rest
    } = context.props
    return (
      <x-drop-down {...{ props: rest } } {...context.data}>
        <div class="dropdown-menu" style={{ display: 'block' }}>
            {
              options.map((item) => {
                return (
                  item.divider ?
                    <x-drop-down-menu-divider></x-drop-down-menu-divider> :
                    <x-drop-down-menu-item onClick={ () => { onItemClick(item) } }
                                           params={{ item }}
                                           href="#">
                      {item.label}
                    </x-drop-down-menu-item>
                )
              })
            }
        </div>
      </x-drop-down>
    )
  },
  props: {
    onItemClick: {
      type: Function,
      default: () => {}
    },
    // example: {label: label, text: text, divider: true}
    options: {
      type: Array,
      default: () => []
    }
  }
}
