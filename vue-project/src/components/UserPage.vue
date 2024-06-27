<template>
  <h2>Users:</h2>
  <Suspense>
    <template #default>
      <GetUsers />
    </template>
    <template #fallback> Loading all users .... </template>
  </Suspense>
</template>

<script>
import GetUsers from './GetUsers.vue'

export default {
  components: {
    GetUsers
  }
}
</script>
