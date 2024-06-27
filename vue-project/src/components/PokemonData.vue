<template>
  <div>
    <h3>Name: {{ name }}</h3>
    <h2>Uppercase:{{ upperCaseName }}</h2>
    <h2>Lowercase:{{ allLowerCase }}</h2>
    <h2>{{ reactiveFun }}</h2>
    <button @click="changeName">Change Name</button>
    <button @click="allCapName">Change Cap</button><br />
    {{ nameList }}
  </div>
</template>

<script>
// reactive reference
import { ref, computed, reactive } from 'vue'

export default {
  //composition API is a pure JS function
  async setup() {
    const name = ref('lili')
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    const rawData = await resp.json()
    const nameList = rawData.results.map((item) => item.name)
    //computed function from vue
    const upperCaseName = computed(() => {
      return name.value.toUpperCase()
    })
    //set a reactive data that can be maneuvered in options APIs
    const state = reactive({
      myName: 'fei'
    })

    return {
      //all returned data are no reactivity,just constant data,
      //wont updated as the data changes.
      //reactive reference
      name,
      nameList,
      upperCaseName,
      state
    }
  },

  //passing objects in order to define how component working call options APIs,
  //each object in this component is a single API
  data() {
    //option API
    return {}
  },

  methods: {
    changeName() {
      this.name = 'fei'
    },
    allCapName() {
      this.name = this.name.toUpperCase()
    }
  },

  computed: {
    //computed property defined as function and behave like data property
    allLowerCase() {
      return this.name.toLowerCase()
    },
    reactiveFun() {
      return this.state.myName.toUpperCase()
    }
  },

  //component created
  created() {
    // console.log(this.nameList)
    // console.log(this.name)
    // console.log(this.name)
  }
}
</script>
