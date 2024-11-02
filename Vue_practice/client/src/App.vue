<template>
  <div class="p-6">
    <!-- <OptionAPI /> -->
    <!-- <TestVmodel /> -->
    New Test
    <ConnectDB />
    <hr class="border-red-500 m-4" />
    <CompositionApiPractice />
    <hr class="border-red-500 m-4" />
    Fetching data:
    <fetch-data>
      <!-- # => v-slot: -->
      <template #here> End of fetching data. </template>
      <template #="obj">
        {{ obj }}
      </template>
    </fetch-data>
    <hr class="border-red-500 m-4" />
    <!-- <TestSlot /> -->
    <RouterView />
    <hr class="border-red-500 m-4" />
    <TestPage />
    <ParentComponent />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import GoogleSignin from "./components/GoogleSignin.vue";
import OptionAPI from "./components/OptionAPI.vue";
import TestVmodel from "./components/TestVmodel.vue";
import TestPage from "./components/TestPage.vue";
import ParentComponent from "./components/ParentComponent.vue";
import FetchData from "./components/FetchData.vue";
import CompositionApiPractice from "./components/CompositionApiPractice.vue";
import ConnectDB from "./components/ConnectDB.vue";

export default {
  name: "App",
  components: {
    OptionAPI,
    TestVmodel,
    GoogleSignin,
    TestPage,
    ParentComponent,
    FetchData,
    CompositionApiPractice,
    ConnectDB
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
