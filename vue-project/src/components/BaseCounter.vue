<script>
import { newCount, useCount } from '../composable/countStore.js'
import { ref } from 'vue'



export default {
  setup() {
    const newCounter = useCount();
    //css state
    const colorRefer = ref('#a72020');
    return {
      newCount,
      newCounter,
      colorRefer
    }
  },

  data() {
    return {
      number: 0,
      incrementAmount: 0,
      
    }
  },

  methods: {
    incrementCount() {
      this.number += this.incrementAmount
      this.newCount += this.incrementAmount
    }
    // changeIncrementAmount(e){
    //     this.incrementAmount = Number(e.target.value);
    // }
  }
}

</script>

<template>
  <h1>{{ colorRefer }}</h1>
   <!-- <div class="button"> -->
    <input type='color' v-model="colorRefer"/>
    <p>Global Counter</p>
    <h3>{{ newCounter.globalCount }}</h3>
 
    <button class='text-white px-1 rounded-md bg-green-500' @click="newCounter.incrementGlobal">Global</button>
  
  
    <p>Local Counter</p>
    <h3>{{ newCounter.localCount }}</h3>
    <button @click="newCounter.incrementLocal">Local</button>
    <hr />
    <h5>counter session</h5>
    <h3>{{ newCount }}</h3>
    <h2>{{ number }}</h2>
    <label for="incrementCount">Increment by:</label>
    <!-- v-bind:value="incrementAmount"
          v-on:input="changeIncrementAmount" -->
    <input type="number" v-model="incrementAmount" />
    <button @click="incrementCount">Increment Number</button>
<!-- </div> -->
</template>
