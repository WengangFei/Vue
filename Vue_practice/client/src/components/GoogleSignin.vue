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

const router = useRouter();
let user = useUserStorage().user;
onMounted(() => {
  // is used to initialize the Google Identity Services for JavaScript, which enables integration with Google’s authentication and authorization services.
  google.accounts.id.initialize({
    client_id: envConfigs.dev.client_id,
    callback: (response) => {
      try {
        const credential = jose.decodeJwt(response.credential);
        user = useUserStorage().signInUser(credential);
        //confirm user sign in
        user.isSignIn = true;
        console.log("Sign in user infor ==>", user);
        localStorage.setItem("googleToken", response.credential);
      } catch (error) {
        console.log("Google sign in error ==>", error);
      }
    },
  }),
    google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      {
        theme: "standard",
        size: "large",
        shape: "pill",
      }
    );
});

watch(
  () => user,
  () => {
    console.log("pppppppp");
    router.push("/home");
  }
);
</script>

<style lang="scss" scoped></style>
