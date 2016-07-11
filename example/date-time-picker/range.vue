<template>
  <div>
    <p>v-date-time-picker:range.start  /   v-date-time-picker:range.end 方式:</p>
    <p>
      <input type="text" v-date-time-picker:range.start="test" format="yyyy/MM/dd" v-model="startDate">
      <input type="text" v-date-time-picker:range.end="test"   v-model="endDate">
    </p>
  </div>
  <div>
    <p>:min-date / :max-date方式:</p>
    <p>
      <input type="text" v-date-time-picker format="hh:mm" v-model="startTime" :max-date="endTime">
      <input type="text" v-date-time-picker format="hh:mm" v-model="endTime" :min-date="startTime">
    </p>
  </div>

</template>

<script type="text/babel">
  export default {
    data () {
      let today = new Date()
      let todayStr = [today.getFullYear(), today.getMonth() + 1, today.getDate()].join('-')
      return {
        baseDate: todayStr,
        startDate: '2016-06-01',
        endDate: '2016-06-30',
        startTime: '08:00',
        endTime: '10:00',
      }
    },
  }
</script>
