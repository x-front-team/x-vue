// import Popper from 'popper.js'
//
// export default {
//   data() {
//     return {
//       show: false,
//       popper: {}
//     }
//   },
//   methods: {
//     toggle() {
//       this.show = !this.show
//     }
//   },
//   watch: {
//     show(val) {
//       if (val) {
//         this._popper.update()
//       }
//     }
//   },
//   mounted() {
//     this._popper = new Popper(this.$refs.btn, this.$refs.content, {
//       modifiersIgnored: ['applyStyle', 'preventOverflow', 'flip'],
//       placement: 'bottom'
//     })
//     this._popper.onUpdate((data) => {
//       let oldLeft = this.popper.left || 0
//       let oldTop = this.popper.top || 0
//       let oldPosition = this.popper.position || 0
//       let { left, top, position } = data.offsets.popper
//       if (!(oldLeft === left && oldTop === top && oldPosition === position)) {
//         this.popper = data.offsets.popper
//       }
//       // console.log(data)
//     })
//   },
//   render(h) {
//     console.log('render')
//     let style
//     if (!this.popper) {
//       style = { display: this.show ? 'block' : 'none' }
//     } else {
//       let { left, top, position } = this.popper
//       style = {
//         display: this.show ? 'block' : 'none',
//         left: 0,
//         top: 0,
//         position,
//         transform: `translate3d(${left}px, ${top}px, 0)`,
//         padding: '20px',
//         background: 'red'
//       }
//     }
//     return (
//       <div>
//         <span ref="btn" style="display: inline-block;">
//           <x-button type="primary"
//                     onClick={this.toggle}>click me</x-button>
//         </span>
//         <transition name="drop">
//           <div ref="content" style={style}>
//             <span>hehe</span>
//           </div>
//         </transition>
//       </div>
//     )
//   }
// }


export default {
  components: {
    demo: {
      render(h) {
        return (
          <div>
            <div style={{
              width: '200px',
              border: '1px solid #ccc',
              backgroundColor: '#fff',
              borderRadius: '3px',
            }}>
              这时百测试内容 <br/>
              这时百测试内容 <br/>
              这时百测试内容 <br/>
              这时百测试内容 <br/>
            </div>
          </div>
        )
      }
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    }
  },
  render(h) {
    return (
      <div>
        <div>
          <h2>x-drop-down</h2>
          <p>支持left、top、right、bottom、left-start、bottom-end</p>
          <h3>left</h3>
          <x-drop-down label="test"
                       btnType="primary"
                       show={this.show}
                       onTrigger={this.toggle}
                       onEscape={ () => { this.show = false } }
                       placement="left">
            <demo />
          </x-drop-down>
        </div>
      </div>
    )
  }
}
