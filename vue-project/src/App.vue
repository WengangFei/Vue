<script>
export default {
  //data function is to define the reactive state for a component
  //when these prop are updated, vue will auto update the DOM
  //to reflect the changes.
  data() {
    //return a configuration object.
    return {
      message: 'Come on!',
      listOfNumbers: [
        { id: '1', name: 'fei', n: [11, 22, 33] },
        { id: '2', name: 'wen', n: [11, 22, 33] },
        { id: '3', name: 'gang', n: [11, 22, 33] }
      ],
      number: 10,
      incrementAmount: 0
    }
  },
  methods: {
    incrementCount() {
      this.number += this.incrementAmount
    }
    // changeIncrementAmount(e){
    //     this.incrementAmount = Number(e.target.value);
    // }
  },

  watch: {
    //watch method is watching for all data changes.
    // watching the number and auto => newValue
    //to Avoid the heavy computation reactive data, move it to computed
    //property to
    number(newValue) {
      newValue % 2 === 0 ? (this.counter = 'Even Counter') : (this.counter = 'Odd Counter')
    }
  }
}
</script>

<template>
  <h1>Vur practice</h1>
  <div id="app">
    <p v-if="message.length % 2 === 0">Even: {{ message }}</p>
    <p v-else>Odd: {{ message }}</p>
    <div v-for="num in listOfNumbers" :key="num.id">
      {{ num.name }}:
      <span v-for="item in num.n" :key="item">{{ item }}</span>
    </div>
    <hr />
    <h5>Counter</h5>
    <h2>{{ number }}</h2>
    <label for="incrementCount">Increment by:</label>
    <!-- v-bind:value="incrementAmount"
        v-on:input="changeIncrementAmount" -->
    <input type="number" v-model="incrementAmount" />
    <button v-on:click="incrementCount">Increment Number</button>
  </div>
</template>
