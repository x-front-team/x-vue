<template>
  <nav v-if="total > 1">
    <ul class="pagination">
      <li :class="{ disabled: current === 1 }" class="page-item">
        <a aria-label="Previous" @click.prevent="prev" class="page-link">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="page in visiblePages" v-bind:class="{ active: page == current }" class="page-item">
        <a @click.prevent="jump(page)" class="page-link">{{ page }}</a>
      </li>
      <li :class="{ disabled: current === this.total }" class="page-item">
        <a aria-label="Next" @click.prevent="next" class="page-link">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 1
    },
    visibleCount: {
      type: Number,
      default: 10
    }
  },

  computed: {
    visiblePages() {
      return PaginationPagesGenerate(this.current, this.visibleCount, this.total)
    }
  },

  methods: {
    jump(num) {
      if (num <= 0 || num > this.total)
        return
      this.current = num
    },

    prev() {
      let num = this.current
      num -= 1

      this.jump(num)
    },

    next() {
      let num = this.current
      num += 1

      this.jump(num)
    }
  }
}

/**
 * 根据 当前页、显示页总数、总数，返回显示可视页数组
 */
function PaginationPagesGenerate(current, visibleCount, total) {

  current = parseInt(current, 10)

  function getDynamicPages() {
    let to, from,
      everyCount = visibleCount,
      everyMiddle = parseInt(Math.floor(everyCount / 2), 10)

    from = current - everyMiddle,
    to = current + everyMiddle

    // 当前页处于中间页前半部分
    if (current > 0 && current <= everyMiddle) {
      from = 1
      to = everyCount
    }

    // 当前页加上中间页大于总页数
    if (current + everyMiddle >= total) {
      from = current - everyMiddle - 1
      to = total

      if (current >= (total - everyMiddle)) {
        from = current - everyMiddle - 1
      }
      if (current === total) {
        from = total - everyCount
      }
    }

    return getVisiblePages(from, to, current, total)
  }

  function getVisiblePages(from, to) {
    let pages = []

    for (; from <= to; from++) {
      pages.push(from)
    }

    return pages
  }

  if (total <= visibleCount)
    return getVisiblePages(1, total)
  else
    return getDynamicPages()
}

</script>
