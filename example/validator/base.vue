<template>

  <input type="text" v-vb-bind="$form.test.validator">

</template>

<script type="text/babel">
  import { createForm } from '../../src/validator/validator'
//  import { connect } from '../../src/validator/connect'
  import directive from '../../src/validator/directive'
  import Vue from 'vue'

  Vue.directive('vbBind', directive)

  console.log(directive)

  // 用mixin来创建form对象,必须在compile之前做,不然会报错
  export default {
//    directives: {
//      'vd-bind': directive
//    },
    beforeCompile() {
      this.$form = createForm({
        'test': {
          'required': 'this is required',
          'max-length': {
            value: 10,
            msg: '最大不超过10'
          }
        }
      })
      console.log(this.$form)
    }
  }
</script>
