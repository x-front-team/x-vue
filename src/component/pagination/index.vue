<template>
  <nav v-if="total > 1">
    <ul :class="classes">
      <!--go to prev page-->
      <li :class="{ disabled: current === 1 }" class="page-item">
        <a aria-label="Previous" @click.prevent="prev" class="page-link">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <!--go to the first page-->
      <li class="page-item" v-show="visiblePages[0] > 1">
        <a @click.prevent="jump(1)" class="page-link">1</a>
      </li>
      <li class="page-item disabled" v-show="visiblePages[0] > 1">
        <a class="page-link">...</a>
      </li>

      <!--normal pages-->
      <li v-for="page in visiblePages" :class="{ active: page == current }" class="page-item">
        <a @click.prevent="jump(page)" class="page-link">{{ page }}</a>
      </li>

      <!--go to the first page-->
      <li class="page-item disabled" v-show="visiblePages[visiblePages.length - 1] < total">
        <a class="page-link">...</a>
      </li>
      <li class="page-item" v-show="visiblePages[visiblePages.length - 1] < total">
        <a @click.prevent="jump(total)" class="page-link">{{total}}</a>
      </li>

      <!--go to next page-->
      <li :class="{ disabled: current === total }" class="page-item">
        <a aria-label="Next" @click.prevent="next" class="page-link">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style>
  .page-link{
    cursor: pointer;
  }
  .page-link:hover{
    text-decoration: none;
  }
</style>

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
    },
    size: { // lg or sm
      type: String,
      default: ''
    },
    onChange: {
      type: Function,
      default() {}
    }
  },

  computed: {
    visiblePages() {
      return paginationPagesGenerate(this.current, this.visibleCount, this.total)
    },
    classes() {
      let classes = {
        pagination: true
      }
      if (this.size) {
        classes['pagination-' + this.size] = true
      }
      return classes
    }
  },

  methods: {
    jump(num) {
      if (num <= 0 || num > this.total) {
        return
      }
//      this.current = num
      this.onChange(num)
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
function paginationPagesGenerate(current, visibleCount, total) {
  current = parseInt(current, 10)

  function getDynamicPages() {
    let to, from,
      everyCount = visibleCount,
      everyMiddle = parseInt(Math.floor(everyCount / 2), 10)

    from = current - everyMiddle
    to = from + everyCount - (everyMiddle % 2) - (visibleCount % 2)

    // 当前页处于中间页前半部分
    if (current > 0 && current <= everyMiddle) {
      from = 1
      to = everyCount
    }

    // 当前页加上中间页大于总页数
    if (current + everyMiddle > total) {
      from = total - everyCount + (everyMiddle % 2) + (visibleCount % 2)
      to = total
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

  if (total <= visibleCount) {
    return getVisiblePages(1, total)
  }
  return getDynamicPages()
}

</script>
