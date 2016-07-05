<template>
  <p>
    <input type="text" v-date-time-picker:range.start="test" format="yyyy/MM/dd" v-model="startDate">
    <input type="text" v-date-time-picker:range.end="test" min-date="2016-5-20" v-model="endDate">
  </p>
  <p>
    <input type="text" v-date-time-picker:range.start="time" format="hh:mm" v-model="startTime">
    <input type="text" v-date-time-picker:range.end="time" format="hh:mm" v-model="endTime">
  </p>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        startDate: '2016-06-01',
        endDate: '2016-06-30',
        startTime: '08:00',
        endTime: '10:00',
      }
    }
  }
</script>
