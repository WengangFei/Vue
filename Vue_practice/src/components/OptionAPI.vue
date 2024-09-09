<template>
  <div class="text-center text-4xl">
    Option API
  </div>
  <div class="p-6">
    Counter: {{ counter }}<br />
    increment by:
    <input type="number" 
    class="border-2"
    v-model="mount"
    ><br />
    <button 
    class="bg-gray-400 py-1 px-2 rounded-md"
    @click="increment()"
    >
      Click
    </button>
  
  </div>
</template>

<script>
  export default {
    //reactive data returns ad an object
    data(){
      return {
        counter:0,
        mount:0
      }
    },
    //modifying data
    methods: {
      increment(){
        this.counter += this.mount;
        this.mount = 0;
      },
    },

    components:{

    }


  }
</script>

<style lang="scss" scoped>

</style>