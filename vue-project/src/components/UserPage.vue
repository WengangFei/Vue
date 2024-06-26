<template>
  <div>Users:</div>
  <div>
    {{ users }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      const resp = await fetch('https://jsonplaceholder.typicode.com/users')
      const rawData = await resp.json()
      this.users = rawData.map((item) => item.name)
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>

<style lang="scss" scoped></style>
