<template>
  <div>
    <input class="border-2 rounded-md"/><br />
    <button class="bg-red-300 rounded-md px-1 my-2"
    @click="loginFun"
    >
      Login
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { loginWelcome } from '@/composable/useUsers.js';


const router = useRouter();

function loginFun(){
  loginWelcome.value = 'Welcome Login'
  router.push('/')
}
</script>

<style lang="scss" scoped></style>
