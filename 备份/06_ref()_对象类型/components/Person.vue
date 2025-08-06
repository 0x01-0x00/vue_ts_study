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
    import {ref} from 'vue'

    // data
    let person = ref({
      name: '张三',
      age: 18,
      tel: '18269776130'
    })
    let persons = ref([
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

    console.log(person)
    console.log(persons)
    for (let i = 0; i < persons.value.length; i++) {
        console.log(persons.value[i].name)
    }

    // methods
    function changeName() {
      person.value.name = '钟涛'
      console.log(person.value.name)
    }
    function changeAge() {
      person.value.age += 1
      console.log(person.value.age)
    }
    function showTel() {
      alert(person.value.tel)
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