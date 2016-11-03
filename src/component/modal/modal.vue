<template>
  <div>
    <backdrop v-if="show"></backdrop>
    <transition name="slide-down">
      <div class="modal" v-if="show" @click="cancel">
        <div class="modal-center-wrapper">
          <div :class="['modal-dialog', 'modal-' + size]" @click="stopEvent">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" @click.prevent="cancel">
                  <span aria-hidden="true">&times;</span>
                </button>
                <slot name="header">
                  <h4 class="modal-title">{{title}}</h4>
                </slot>
              </div>
              <div class="modal-body">
                <slot></slot>
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  <x-button type="primary" classes="btn-modal-xs modal-footer-save" @click.prevent="confirm">确定</x-button>
                  <!--<span class="btn-split">或</span>-->
                  <x-button @click="cancel(dropDown)" @click.prevent="cancel">取消</x-button>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>
<script type="text/babel">
  import XButton from '../button/button.vue'
  import Backdrop from './backdrop.vue'

  export default {
    props: {
      show: {
        type: Boolean,
        default: false,
        twoWay: true
      },
      title: {
        type: String,
        default: ''
      },
      closeBtn: {
        type: Boolean,
        default: true
      },
      onConfirm: {
        type: Function,
        default: () => {}
      },
      onCancel: {
        type: Function,
        default: () => {}
      },
      size: {
        type: String,
        default: 'md'
      }
    },
    components: {
      XButton,
      Backdrop,
    },
//    data () {
//      return {
//        size: `modal-${this.size}`
//      }
//    },
    methods: {
      confirm() {
        this.onConfirm()
        this.show = false
      },
      cancel() {
        this.onCancel()
        this.show = false
      },
      stopEvent (e) {
        e.stopPropagation()
      }
    },
    watch: {
      'show': function watchShow(val) {
        if (val) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .modal{
    display: table
    width: 100%
    height: 100%
  }
  .modal-center-wrapper {
    display: table-cell
    vertical-align: middle
  }
  .modal-dialog {
    margin-top: -100px
  }
  .modal-content{
    padding : 10px 15px
  }
  .modal-header{
    padding : 0
    padding-bottom : 10px
  }
  .modal-footer{
    /*border-top-width 0*/
    /*text-align center*/
    .modal-footer-save{
      /*width : 200px*/
    }
    .btn-split{
      margin : 0 10px
    }
  }
  .modal-title{
    /*line-height :20px*/
    /*font-size 14px*/
    /*color: #3982c0*/
  }
  .vertical-alignment-helper {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
</style>
