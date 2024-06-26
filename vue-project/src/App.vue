<template>
  <div>
    <!-- <component :is="'RouteTest'" /> -->
    <RouteTest />
    <hr />
    <!-- https://pokeapi.co/api/v2/pokemon?limit=25 -->
    <!-- Suspense components are used to display fallback content when 
    waiting for asynchronous component to resolve. -->
    <Suspense>
      <!-- async component -->
      <template #default>
        <PokemonData />
      </template>

      <!-- define a fallback component or content that display while async component is loading -->
      <template #fallback> loading Pokemon data..... </template>
      <!-- <template #fallback>
        <LoadingSpinner />
      </template> -->
    </Suspense>
  </div>

  <hr />
</template>

<script>
import RouteTest from './components/RouteTest.vue'
import PokemonData from './components/PokemonData.vue'

export default {
  components: {
    RouteTest,
    PokemonData
  }
  // computed: {
  //   fun() {
  //     ;(() => {
  //       console.log('fengyuexiang')
  //     })()
  //     return 'fei'
  //   }
  // }
}
</script>
