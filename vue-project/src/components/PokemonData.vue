<template>
  <div></div>
</template>

<script>
export default {
  //composition API
  async setup() {
    const name = 'lili'
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    const rawData = await resp.json()
    const nameList = rawData.results.map((item) => item.name)

    return {
      name,
      nameList
    }
  },

  //passing objects in order to define how component working call options APIs,
  //each object in this component is a single API
  data() {
    //option API
    return {}
  },

  methods: {},

  //component created
  created() {
    console.log(this.nameList)
    console.log(this.name)
  }
}
</script>
