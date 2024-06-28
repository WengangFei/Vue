<!-- full composition API without setup model -->

<!-- refactor the UserPage and getting the user from api in this single 
component by practicing using Suspense component -->
<template>
  <div>{{ users }}</div>
  <label>Name begin with: </label>
  <input type="text" @input="captureName" /><br />
  <h3 v-if="state.nameList.length === 0">No names are found</h3>
  <h3 v-else>{{ state.nameList }}</h3>
</template>

<script setup>
import { ref, reactive } from 'vue'
// export default {
  //getting all users from setup composition API from early setup stage,
  //runs before every other options APIs. This will allow to get information
  //from API as early as possible.
  // async setup() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    const users = ref(data.map((item) => item.name))
    const state = reactive({
      name: '',
      nameList: ''
    })
    //regular js function.
    function captureName(e) {
      state.name = e.target.value
      state.nameList = users.value.filter((name) =>
        name.includes((state.name = state.name[0]?.toUpperCase() + state.name.slice(1)))
      )
    }

    // return {
    //   state,
    //   users,
    //   captureName
    // }
  // }
// }
</script>
