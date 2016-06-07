<template>
  <pagination :total="24" :current="current" :on-change="updateCurrent" :visible-count="5"></pagination>

  <pagination :total="24" :visible-count="9" :on-change="updateCurrent" size="sm"></pagination>
</template>

<script>
import pagination from 'component/pagination'

export default {
  data() {
    return {
      current: 1
    }
  },
  components: {
    pagination
  },
  methods: {
    updateCurrent(page) {
      this.current = page
    }
  }
}
</script>
