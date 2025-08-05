<template>
  <div class = "app">
    <h1>vue_ts_study</h1>
    <Person></Person>
  </div>
</template>

<script lang="ts">
  import Person from './components/Person.vue'

  export default {
    name:'App', // 组件名
    components: { // 注册组件
      Person
    }
  }
</script>

<style>
  .app {
    background-color: #a33333;
    color: #887474;
  }
</style>