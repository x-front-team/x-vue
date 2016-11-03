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
      this.referenceElm = this.$slots.trigger[0]
    } else {
      this.referenceElm = this.$refs.reference.$el
    }
    this.popperElm = this.$refs.popper
  },
  render(h) {
    return (
      <div class="dropdown" v-co={this.onEscape}>
        {
          this.$slots.btn || (
            <x-button type={this.btnType}
                      ref="reference"
                      onClick={this.onTrigger}
                      disabled={this.disabled}>{this.label}
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
