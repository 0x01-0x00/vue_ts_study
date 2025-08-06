<template>
  <div class="person">
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>

    <ul>
      <li v-for="p in persons" :key="p.name">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
  }
</script>

<script setup lang="ts">
import {reactive, ref} from 'vue'

    // data
    let a = ref('A ')
    let person = reactive({
      name: '张三',
      age: 18,
      tel: '18269776130'
    })
    let persons = reactive([
      {
        name: 'person1',
      },
      {
        name: 'person2',
      },
      {
        name: 'person3',
      }
    ])

    console.log(a)
    console.log(person)
    console.log(persons)

    // methods
    function changeName() {
      // person.name = '钟涛'
      Object.assign(person, {name: '钟涛', age: 19}, {tel: '18269778888'})
      console.log(person.name)
    }
    function changeAge() {
      person.age += 1
      console.log(person.age)
    }
    function showTel() {
      alert(person.tel)
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