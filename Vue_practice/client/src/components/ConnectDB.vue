<template>
  <div>DB name: 
  <router-link to="/fetch-data" @click="requestDB">
    <span class="text-blue-500 font-bold underline">{{ database }}</span>
  </router-link></div>
  <div>Host: {{ host }}</div>
  <div v-if="data.length > 0"><FetchDataFromDB :data="data"/></div>
</template>

<script>
import axios from "axios";
import FetchDataFromDB from "./FetchDataFromDB.vue";

export default {
  data() {
    return {
      database: "Fetch data from DB",
      host: "localhost",
      data: [],
    };
  },
  methods: {
    async requestDB() {
      console.log("requestDB onMounted,",this.$route);
      try {
        const response = await axios.get("http://localhost:3000/api/db");
        
        if (response.data.error) {
          console.error(response.data.error);
          return;
        }

        console.log('response ==>', response);
        this.data = response.data;
      } catch (error) {
        console.error("Error fetching data from the database:", error);
      }
    },
  },

  components: {
    FetchDataFromDB,
  },
};
</script>
