<template>
  <div>Home Page</div>
</template>

<script setup>
import useUserStorage from "../store/userInstance";



console.log("home user ==>", useUserStorage().user);
</script>

<style lang="scss" scoped></style>
