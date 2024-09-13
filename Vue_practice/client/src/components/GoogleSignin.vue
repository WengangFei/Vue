<template>
  <div>Google Sign in button</div>
  <div id="googleSignInButton" class="center-x"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as jose from "jose";
import { watch } from "vue";
import envConfigs from "@/envConfigs.json";
import useUserStorage from "../store/userInstance";
import { useRouter } from "vue-router";
console.log("signin page");
const router = useRouter();
// console.log("login user ==>", useUserStorage().user);
onMounted(() => {
  if (!localStorage.getItem("googleToken")) {
    // is used to initialize the Google Identity Services for JavaScript, which enables integration with Google’s authentication and authorization services.
    google.accounts.id.initialize({
      client_id: envConfigs.dev.client_id,
      callback: (response) => {
        try {
          const credential = jose.decodeJwt(response.credential);
          useUserStorage().user.initUser(credential);
          //confirm user sign in
          useUserStorage().user.isSignIn = true;
          localStorage.setItem("googleToken", JSON.stringify(credential));
        } catch (error) {
          console.log("Google sign in error ==>", error);
        }
      },
    });
    google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      {
        theme: "standard",
        size: "large",
        shape: "pill",
      }
    );
  } else {
    console.log("aaaa home");
    const localStore = JSON.parse(localStorage.getItem("googleToken"));
    useUserStorage().user.initUser(localStore);
  }
});

watch(
  () => useUserStorage().user.isSignIn,
  () => {
    //redirect uri
    router.push("/home");
  }
);
</script>

<style lang="scss" scoped></style>
