<template>
  <div>
    <h3>Name: {{ name }}</h3>
    <h2>Uppercase:{{ upperCaseName }}</h2>
    <h2>Lowercase:{{ allLowerCase }}</h2>
    <button @click="changeName">Change Name</button>
    <button @click="allCapName">Change Cap</button><br />
    {{ nameList }}
  </div>
</template>

<script>
// reactive reference
import {ref, computed} from 'vue';

export default {

  //composition API
  async setup() {
    const name = ref('lili');
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    const rawData = await resp.json()
    const nameList = rawData.results.map((item) => item.name)
  
    const upperCaseName = computed(()=>{
      return name.value.toUpperCase();
    });
    return {
      //all returned data are no reactivity,just constant data,
      //wont updated as the data changes.
      //reactive reference
      name,
      nameList,
      upperCaseName
    }
  },

  //passing objects in order to define how component working call options APIs,
  //each object in this component is a single API
  data() {
    //option API
    return {}
  },

  methods: {
    changeName(){
      this.name = 'fei' 
    },
     allCapName(){

      this.name = this.name.toUpperCase();
     }
  },

  computed:{
    allLowerCase(){
      return this.name.toLowerCase()
    }
  },

  //component created
  created() {
    // console.log(this.nameList)
    // console.log(this.name)
    console.log(this.name)
  }
}
</script>
