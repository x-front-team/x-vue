<template>
  <p>
    <input type="text"
           v-date-time-picker
           format="yyyy-MM-dd"
           placeholder="this is default align">

    <input type="text"
           v-date-time-picker
           format="yyyy-MM-dd ss"
           placeholder="align to right"
           align="right">
  </p>
</template>
