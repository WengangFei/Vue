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

onMounted(() => {
  // is used to initialize the Google Identity Services for JavaScript, which enables integration with Google’s authentication and authorization services.
  google.accounts.id.initialize({
    client_id: envConfigs.dev.client_id,
    callback: (response) => {
      try {
        const credential = jose.decodeJwt(response.credential);
        const logInUser = useUserStorage().signInUser(credential);
        useUserStorage().updateUser({ ...logInUser });
        //confirm user sign in
        useUserStorage().user.isSignIn = true;
        const user = useUserStorage().user;
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
  () => useUserStorage().user,
  (newV, oldV) => {
    //redirect uri
    router.push("/home");
  }
);
</script>

<style lang="scss" scoped></style>
