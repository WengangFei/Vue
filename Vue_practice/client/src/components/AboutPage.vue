<template>
  <div>About page</div>
  <div>
  Go to Home Page <br />
  <button class="bg-red-400 text-white px-1 rounded-md" @click="changeToHomePage">
    Go
  </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";


const router = useRouter();

const changeToHomePage = ()=>{
  router.push('/home')
}

</script>

<style lang="scss" scoped></style>
