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
    name:'Person',
    setup() {
      // data
      let name = '张三' // 非响应式数据
      let age = 18
      let tel = '18269776130'

      // methods
      function changeName() {
        name = '钟涛'
      }
      function changeAge() {
        age += 1
      }
      function showTel() {
        alert(tel)
      }

      return {name, age, tel, changeName, changeAge, showTel}
    }
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