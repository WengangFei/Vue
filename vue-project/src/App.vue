<template>
  <div>
    <BaseCounter />
    <hr>
    <h2>Show name: {{ myName }}</h2>

    <hr />
    <!-- <component :is="'RouteTest'" /> -->
    <RouteTest />
    <hr />
    <!-- https://pokeapi.co/api/v2/pokemon?limit=25 -->
    <!-- Suspense components are used to display fallback content when 
    waiting for asynchronous component to resolve. -->
    <Suspense>
      <!-- async component -->
      <template #default>
        <PokemonData region="kakaPokemon" @showNameOnTop="showName" />
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
import BaseCounter from './components/BaseCounter.vue'

export default {
  components: {
    RouteTest,
    PokemonData,
    BaseCounter 
  },

  methods: {
    showName() {
      this.myName = 'Wengang Fei'
    }
  },

  data() {
    return {
      myName: ''
    }
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
