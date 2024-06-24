<script>
    export default {

        props:{
           fun:{
            type:Function,
            require:true,
           },
      
        },
        data(){
            return {
                number: 10,
                incrementAmount: 0
            }
        },

        methods: {
            incrementCount(){
                this.number += this.incrementAmount
            }
            // changeIncrementAmount(e){
            //     this.incrementAmount = Number(e.target.value);
            // }
        },
    }
</script>

<template>
    <h5>Counter</h5>
    <h2>{{ number }}</h2>
    <label for="incrementCount">Increment by:</label>
    <!-- v-bind:value="incrementAmount"
        v-on:input="changeIncrementAmount" -->
    <input type="number" v-model="incrementAmount" />
    <button @click="incrementCount">Increment Number</button>
</template>