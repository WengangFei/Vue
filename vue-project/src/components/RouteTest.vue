<template>
  <div>
    <a href="#" @click.prevent="changeToHomePage">Home</a>&
    <a href="#" @click.prevent="changeToLoginPage">Login</a>&
    <a href="#" @click.prevent="changeToUserPage">User Page</a>&
    <!-- dynamic components -->
    <component :is="renderPage" />
  </div>
</template>

<script>
import HomePage from './HomePage.vue'
import LoginPage from './LoginPage.vue'
import UserPage from './UserPage.vue'

export default {
  components: {
    HomePage,
    LoginPage,
    UserPage
  },

  data() {
    return {
      page: 'Home'
    }
  },

  computed: {
    renderPage() {
      return this.page + 'Page'
    }
  },

  methods: {
    changeToHomePage() {
      this.page = 'Home'
    },

    changeToLoginPage() {
      this.page = 'Login'
    },
    changeToUserPage() {
      this.page = 'User'
    }
  }
}
</script>
