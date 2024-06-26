<template>
  <div>
    <!-- https://pokeapi.co/api/v2/pokemon?limit=25 -->
     <div v-for="po in pokemon" :key="po">
      <h3>{{ po  }}</h3>
     </div>
  </div>
</template>

<script>
  export default {
    data:()=>({
      pokemon:[1,2,3]
    })
  }
  
</script>

