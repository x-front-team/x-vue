<template>
  <div>
    <backdrop></backdrop>
    <div class="notification-container">
      <div class="wrapper">
        <div class="notification" transition="slide-down">
          <span :class="iconClasses">{{icon}}</span>
          <p class="notification-text">{{text}}</p>
          <a href="#" class="notification-btn" @click.prevent="handleClose">知道了</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import Backdrop from 'component/modal/backdrop.vue'

  const icons = {
    success: '✓',
    error: '!',
    info: '···'
  }
  export default {
    props: {
      close: {
        type: Function,
        default: function defaultClose () {}
      },
      type: {
        type: String,
        default: 'info'
      },
      text: {
        type: String,
        default: ''
      }
    },
    components: {
      Backdrop,
    },
    computed: {
      icon: function icon () {
        return icons[this.type]
      },
      iconClasses: function iconClasses () {
        let classes = {
          'notification-icon': true
        }

        classes['notification-icon-' + this.type] = true
        return classes
      }
    },
    methods: {
      handleClose(e) {
        if (e) e.preventDefault()
        this.close()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .notification-container {
    position: fixed
    z-index: 1100
    display: table
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100%
    height: 100%
  }
  .wrapper {
    display: table-cell
    text-align: center
    vertical-align: middle
  }
  .notification {
    position: relative
    padding: 20px
    padding-top: 30px
    width: 250px
    height: 170px
    margin: 0 auto
    background-color: #ffffff
    border-radius: 2px
  }

  .notification-icon {
    display: block
    width: 20px
    height: 20px
    margin: 0 auto
    margin-bottom: 10px
    border-radius: 10px
    text-align: center
    line-height: 20px
    color: #ffffff
    &.notification-icon-info {
      background-color: #009ce5
    }
    &.notification-icon-error {
      background-color: #ff5454
    }
    &.notification-icon-success {
      background-color: #009ce5
    }
  }

  .notification-text {
    margin: 0
    font-size: 16px
    color: #333333
    text-align center
  }

  .notification-btn {
    position: absolute
    display: block
    width: 80px
    height: 30px
    bottom: 20px
    left: 50%
    margin-left: -40px
    border-radius: 2px
    border: 1px solid #999999
    background-color: #ffffff
    font-family: '宋体'
    font-size: 12px
    color: #999999
    text-align center
    line-height 30px
  }

  .back-drop {
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    background-color: rgba(0, 0, 0, .3)
  }

  .x-notify-transition {
    z-index: 1001
    transition: all .25s
    .notification {
      transition: all .25s
    }
  }

  .x-notify-enter, .x-notify-leave {
    opacity: 0
    .notification {
      transform: translateY(-20%)
      opacity: 0
    }
  }
</style>