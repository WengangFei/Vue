<template>
  <div class="p-6">
    <ButtonSlot class="bg-blue-400 rounded-md text-white px-1">
    <template #scopedSlot="{changIcon}">
      {{ changIcon ? '🍏' : '🐙' }}       
    </template>
      Click Me

    </ButtonSlot>
  
    <hr class="border-red-500 m-4" />
    <label>Hide the component: </label>
    <input type="checkbox" v-model="checked"/>
    <ComponentParent text="Parent" v-if="checked"/>
    <hr class="border-red-500 m-4" />
    <!-- <OptionAPI /> -->
    <!-- <TestVmodel /> -->
    <p :class="{'change-color': isChanged}">New Test</p>
    <button 
      class="bg-red-500 text-white px-1 rounded-md ml-4" 
      @click="()=>isChanged = !isChanged"
    >
      Change To {{ isChanged ? 'Black' : 'Red' }}
    </button>
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
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import GoogleSignin from "./components/GoogleSignin.vue";
import OptionAPI from "./components/OptionAPI.vue";
import TestVmodel from "./components/TestVmodel.vue";
import TestPage from "./components/TestPage.vue";
import FetchData from "./components/FetchData.vue";
import CompositionApiPractice from "./components/CompositionApiPractice.vue";
import ConnectDB from "./components/ConnectDB.vue";
import ComponentParent from "./components/ComponentParent.vue";
import ButtonSlot from "./components/ButtonSlot.vue";


export default {
  name: "App",
  components: {
    OptionAPI,
    TestVmodel,
    GoogleSignin,
    TestPage,
    FetchData,
    CompositionApiPractice,
    ConnectDB,
    ComponentParent,
    ButtonSlot
  },

  methods: {
    handleGoogleSignIn(idToken) {
      // Handle the Google ID token (send to server for verification, etc.)
      console.log("Google ID Token:", idToken);
    },
  },

  data(){
    return {
      isChanged: false,
      checked: true,
    }
  }
};
</script>

<style scoped>
.change-color {
  color: red;
}
</style>
