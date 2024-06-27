<!-- refactor the UserPage and getting the user from api in this single 
component by practicing using Suspense component -->
<template>
  <div>{{ users }}</div>
</template>

<script>
export default {
  async setup() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    const getUsers = data.map((item) => item.name)

    return {
      users: getUsers
    }
  }
}
</script>
