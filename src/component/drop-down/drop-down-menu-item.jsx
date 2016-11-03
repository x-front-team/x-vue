export default {
  props: {
    href: {
      type: String,
      default: '#'
    },
    onClick: {
      type: Function
    },
    params: {
      type: Object
    }
  },
  functional: true,
  render(h, context) {
    console.log('menu-item', context)
    let {
      onClick,
      params,
      href
    } = context.props
    return (
      <a class="dropdown-item" on-click={ (e) => { onClick(e, params) } } href={href}>
        {context.slots().default}
      </a>
    )
  }
}
