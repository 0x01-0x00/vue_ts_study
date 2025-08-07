<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"> <br/>
    名：<input type="text" v-model="lastName"> <br/>
    全名：{{fullName}}
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
  }
</script>

<script setup lang="ts">
    import {computed, ref} from 'vue'

    // data
    let firstName = ref('')
    let lastName = ref('')

    // 只读
    // let fullName = computed(() => {
    //       return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    // })

    // 可读可写
    let fullName = computed({
      get: () => {
        return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
      },
      set: (data) => {
        let names = data.split('-')
        firstName.value = names[0]
        lastName.value = names[1]
      }
    })
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>