<template>
  <div>Home Page</div>
  <div>
  Go to About Page <br />
  <button class="bg-red-400 text-white px-1 rounded-md" @click="changeToAboutPage">
    Go
  </button>
  </div>
</template>

<script setup>
import useUserStorage from "../store/userInstance";
import { useRouter } from "vue-router";
import api from "../assets/interceptors";



const router = useRouter();

const changeToAboutPage = ()=>{
  api.get('/about')
  router.push('/about')
}

// console.log("home user ==>", useUserStorage().user);
</script>

<style lang="scss" scoped></style>
