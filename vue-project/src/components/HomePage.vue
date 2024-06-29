<template>
  <div>
    {{ nameList }}
  </div>
</template>

<script setup>
import { userList } from '../composable/useUsers.js'

const nameList = userList.value.slice(0, 5)
</script>

<style></style>
