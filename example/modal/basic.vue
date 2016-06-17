<template>
  <p>
    <button :on-click="showModal" type="primary" size="sm">弹出</button>
    <p class="text-muted">size有sm,md,lg, 默认md</p>
  </p>
  <modal :show.sync="isShow" size="lg">
    <div>
      <p style="color: red;">这是模态框内容</p>
    </div>
  </modal>
</template>

<script>
import Modal from 'component/modal/modal.vue'
import Button from 'component/button/button.vue'

export default {
  data() {
    return {
      isShow: false,
    }
  },
  components: {
    Modal,
    Button,
  },
  methods: {
    showModal () {
      this.isShow = true
    }
  }
}
</script>
