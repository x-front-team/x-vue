export function getBodyScrollTop() {
  let scrollTop
  if (typeof window.pageYOffset !== 'undefined') { // pageYOffset指的是滚动条顶部到网页顶部的距离
    scrollTop = window.pageYOffset
  } else if (typeof document.compatMode !== 'undefined' && document.compatMode !== 'BackCompat') {
    scrollTop = document.documentElement.scrollTop
  } else if (typeof document.body !== 'undefined') {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
}

export default getBodyScrollTop
