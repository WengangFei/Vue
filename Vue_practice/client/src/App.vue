<template>
  <div class="p-6">
    <!-- <OptionAPI /> -->
    <!-- <TestVmodel /> -->
    New Test
    <hr class="border-red-500 m-4" />
    <!-- <TestSlot /> -->
    <RouterView />
    <hr class="border-red-500 m-4" />
    <TestPage />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import GoogleSignin from "./components/GoogleSignin.vue";
import OptionAPI from "./components/OptionAPI.vue";
import TestVmodel from "./components/TestVmodel.vue";
import TestPage from "./components/TestPage.vue";

export default {
  name: "App",
  components: {
    OptionAPI,
    TestVmodel,
    GoogleSignin,
    TestPage,
  },

  methods: {
    handleGoogleSignIn(idToken) {
      // Handle the Google ID token (send to server for verification, etc.)
      console.log("Google ID Token:", idToken);
    },
  },
};
</script>

<style lang="scss" scoped></style>
