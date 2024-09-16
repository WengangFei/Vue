<template>
  <div v-if="user.isSignIn">The Page is not Exist</div>
  <div v-else>Google Sign in button</div>
  <div id="googleSignInButton" class="center-x"></div>
</template>

<script setup>
import { onMounted } from "vue";
import { watch } from "vue";
import useUserStorage from "../store/userInstance";
import { useRouter } from "vue-router";
import envConfigs from "@/envConfigs.json";

const router = useRouter();
const user = useUserStorage().user;
const env = envConfigs;
// console.log("login user ==>", useUserStorage().user);

onMounted(() => {
  user.renderButton();
});
watch(
  () => user.isSignIn,
  () => {
    //redirect uri
    router.push("/home");
  }
);
</script>

<style lang="scss" scoped></style>
