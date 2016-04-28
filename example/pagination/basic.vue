<template>
  <pagination :total="24" :current.sync="current"></pagination>

  <pagination :total="24" :visible-count="9"></pagination>
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
  }
}
</script>
