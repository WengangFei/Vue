<template>
  <div>Google Sign in button</div>
  <a
    id="googleSignInButton"
    class="center-x"
    href="https://accounts.google.com/o/oauth2/v2/auth?client_id=847596083245-o0g8vrikn0gdk21ak1s4cca45ufc995q.apps.googleusercontent.com&redirect_uri=http://localhost:5173/auth/callback&response_type=code&scope=openid%20email%20profile"
  >
  </a>
</template>

<script setup>
import { onMounted } from "vue";
import * as jose from "jose";
import { User } from "@/assets/userInformation";
import envConfigs from "@/envConfigs.json";

onMounted(() => {
  //   localStorage.clear();
  // is used to initialize the Google Identity Services for JavaScript, which enables integration with Google’s authentication and authorization services.
  google.accounts.id.initialize({
    client_id: envConfigs.dev.client_id,
    callback: (response) => {
      try {
        const credential = jose.decodeJwt(response.credential);
        console.log(
          "User infor decoded from sign in credential ==>",
          credential
        );
        const signInUser = new User(credential);
        console.log("Sign in user infor ==>", signInUser);
        signInUser.setLocalStorage(response.credential);
        console.log(window.localStorage.getItem("googleToken"));
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
</script>

<style lang="scss" scoped></style>
