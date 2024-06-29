<!-- FULL COMPOSITION API -->

<template>
  <div>
    <h3>{{ newCount }}</h3>
    <h3>Name: {{ name }}</h3>
    <h2>Uppercase:{{ upperCaseName }}</h2>
    <h2>Lowercase:{{ allLowerCase }}</h2>
    <h2>{{ reactiveFun }}</h2>
    <button @click="changeName">Change Name</button>
    <button @click="allCapName">Change Cap</button><br />
    {{ userList }}
    <p>Pass prop is {{ region }}</p>
    <button @click="$emit('showNameOnTop')">Show name on top</button>
  </div>
</template>

<script setup>
// reactive reference
import { ref, computed, reactive } from 'vue'
import { newCount } from '../composable/countStore.js'
import { userList } from '../composable/useUsers.js'
//define props
//access region => props.region
defineProps({
  region: {
    type: String,
    default: 'knot'
  }
})

defineEmits(['showNameOnTop'])

// export default {
//composition API is a pure JS function
// async setup() {
//in script setup, Vue hoist and does all the async stuff,no need to manually assign async
const name = ref('lili') //return a object, to access the value lili, unpack to name.value
const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
const rawData = await resp.json()
userList.value = rawData.results.map((item) => item.name)

//computed function from vue
const upperCaseName = computed(() => {
  return name.value.toUpperCase()
})
//set a reactive data that can be maneuvered in options APIs
const state = reactive({
  myName: 'fei'
})

//computed return a value as the reactive data and set in setup function
//return object to expose to the options APIs an template
const allLowerCase = computed(() => name.value.toLowerCase())
const reactiveFun = computed(() => state.myName.toUpperCase())

//JS methods
function changeName() {
  name.value = 'fei'
}

function allCapName() {
  name.value.toUpperCase()
}

// function changeTopName() {
//   emits('showNameOnTop')
// }

// return {
//   //all returned data are no reactivity,just constant data,
//   //wont updated as the data changes.
//   //reactive reference
//   name,
//   nameList,
//   upperCaseName,
//   state,
//   allLowerCase,
//   reactiveFun,
//   changeName,
//   allCapName,
//   passDownProp
// }

//passing objects in order to define how component working call options APIs,
//each object in this component is a single API

//option API
// methods: {
//when access the data in setup function, can directly use this.name form
//no need to unpack the object data that saved in returning object
// allCapName() {
//   this.name = this.name.toUpperCase()
// }
// }
// }
</script>
