<template>
  <pagination :total="24" :current.sync="current"> </pagination>
</template>

<script>
import pagination from 'component/pagination'

export default {
  data() {
    return {
      current: 2
    }
  },
  components: {
    pagination
  }
}
</script>
