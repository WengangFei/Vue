<template>
  <div>
    <h2 v-if="loginWelcome.length!==0" class="font-bold text-red-500">
      {{ loginWelcome }}
    </h2>
    <RouterLink v-for="item in nameList" 
    :key="item.id" class="mx-1 underline"
    :to="`/users/${item.url.slice(-2)}`"
    >
      {{ item.name }} {{ '    ' }}
    </RouterLink>
  </div>
</template>

<script setup>
import { userList } from '../composable/useUsers.js'
import { loginWelcome } from '@/composable/useUsers.js';


const nameList = userList.value.slice(0, 5)

</script>

