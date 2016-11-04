import VuePopperMixin from '../mixin/vue-popper'
import clickOutsideDirective from '../../directives/click-outside'
import dropDownMixin from './drop-down-mixin'

export default {
  name: 'x-drop-down',
  mixins: [VuePopperMixin, dropDownMixin],
  directives: {
    co: clickOutsideDirective
  },
  data() {
    return {
      isShow: false,
      effect: 'md-fade-bottom'
    }
  },
  mounted() {
    if (this.$slots.trigger) {
      this.referenceElm = this.$slots.trigger[0].elm
    } else {
      this.referenceElm = this.$refs.reference.$el
    }
    this.popperElm = this.$refs.popper
  },
  methods: {
    handleTrigger() {
      if (!this.disabled) this.onTrigger()
    },
    handleEscape() {
      if (!this.disabled) this.onEscape()
    }
  },
  render(h) {
    return (
      <div class="dropdown" v-co={this.handleEscape}>
        {
          this.$slots.trigger || (
            <x-button type={this.btnType}
                      ref="reference"
                      onClick={this.handleTrigger}
                      disabled={this.disabled}>
              {this.label}
            </x-button>
          )
        }
        <transition name={this.effect}>
          <div ref="popper" class="x-drop-down-content" v-show={this.showPopper}>
            {this.$slots.default}
          </div>
        </transition>
      </div>
    )
  }
}