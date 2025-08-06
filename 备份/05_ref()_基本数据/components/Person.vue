<template>
  <div class="person">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
  }
</script>

<script setup lang="ts">
    import { ref } from 'vue'

    // data
    let name = ref('张三') // 响应式数据
    let age = ref(18)
    let tel = '18269776130'

    console.log(name)

    // methods
    function changeName() {
      name.value = '钟涛'
      console.log(name.value)
    }
    function changeAge() {
      age.value += 1
      console.log(age.value)
    }
    function showTel() {
      alert(tel)
    }
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>