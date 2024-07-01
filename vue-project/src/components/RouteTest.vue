<template>
  <div>
    <RouterView />
    <RouterLink to="/" class="bg-sky-500 text-sm mx-2 px-1 rounded-md"> Home </RouterLink>
    <RouterLink to="/login" class="bg-sky-500 text-sm mx-2 px-1 rounded-md"> Login </RouterLink>
    <RouterLink to="/users" class="bg-sky-500 text-sm mx-2 px-1 rounded-md"> Users </RouterLink>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCount } from '@/composable/countStore.js'
import { watch } from 'vue'
import { pinia } from '@/pinia/store.js'

const globalCount = useCount()
const router = useRouter()
watch(globalCount.globalCount, (value) => {
  value > 530 ? router.push('/users') : null
})
</script>
