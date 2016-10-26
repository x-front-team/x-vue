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
  },
  render(h) {
    return (
      <div>
        <pagination total={24}
                    current={this.current}
                    onChange={this.updateCurrent}
                    visibleCount={5}></pagination>

        <pagination total={24}
                    current={this.current}
                    visibleCount={9}
                    onChange={this.updateCurrent}
                    size="sm"></pagination>
      </div>
    )
  }
}
