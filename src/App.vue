<!--<script setup lang="ts">-->
<script setup lang="ts">
import AppTs from './App.ts'

let {user, password, dept, userLogin} = AppTs()

</script>

<template>
  <div>
    <div class="login">
    用户：<input v-model="user"/> <br/>
    密码：<input type = "password" v-model="password"/> <br/>
    <button v-on:click="userLogin">登录</button>
    </div>
  </div>
</template>

<style scoped>


</style>
