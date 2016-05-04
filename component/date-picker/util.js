const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export function isLeapYear(year) {
  return typeof year === 'number' && (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)
}

// 获取正常的每个月的日期的数组
export function getNormalDateArray(year, month, today) {

  let todayYear = today.getFullYear()
  let todayMonth = today.getMonth()
  let todayDate = today.getDate()
  let isThisYearMonth = todayYear === year && todayMonth === month

  let length = MONTH_DAYS[month]

  if (length === 28) {
    length = isLeapYear(year) ? 29 : 28
  }

  let arr = []

  for (let i=0; i<length; i++) {
    arr.push({
      year, month,
      isThisMonth: true,
      selected: false,
      day: i + 1,
      isToday: isThisYearMonth && i + 1 === todayDate
    })
  }

  return arr

}

export function getFirstDateArrayLength(difference) {
  return difference === 0 ? 7 : difference < 0 ? 0 - difference : 7 - difference
}

// 填入必要的上个月和下个月的日期,让二维数组都变成长度7
export function fillDateArray(year, month, array) {

  let firstWeek = array[0]
  let lastWeek = array[array.length - 1]

  let prevMonth = month === 0 ? 11 : month - 1
  let prevYear = month === 0 ? year - 1 : year
  let prevMonthLength = MONTH_DAYS[prevMonth]

  let lastMonth = month === 11 ? 0 : month + 1
  let lastYear = month === 11 ? year + 1 : year
  let lastIndex = 1

  while (firstWeek.length < 7) {
    firstWeek.unshift({
      year: prevYear,
      month: prevMonth,
      isThisMonth: false,
      selected: false,
      day: prevMonthLength,
      isToday: false
    })
    prevMonthLength--
  }

  while (lastWeek.length < 7) {
    lastWeek.push({
      year: lastYear,
      month: lastMonth,
      isThisMonth: false,
      selected: false,
      day: lastIndex,
      isToday: false
    })
    lastIndex++
  }

}

/**
 * 传入正确的时间,格式化成指定的字符串
 * @param {Date|String|Number} date
 */
export function formatDate(date, fmt) {

  date = new Date(date)

  let o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    'S': date.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1,
        (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }

  return fmt

}

export const weekArray = {
  0: '天',
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六'
}
