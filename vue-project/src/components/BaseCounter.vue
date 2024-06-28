<script>
import { newCount } from '../composable/countStore.js'
    
    export default {

        setup(){
            return{
                newCount
            }
        },
        
        data(){
            return {
                number: 0,
                incrementAmount: 0
            }
        },

        methods: {
            incrementCount(){
                this.number += this.incrementAmount;
                this.newCount += this.incrementAmount;
            }
            // changeIncrementAmount(e){
            //     this.incrementAmount = Number(e.target.value);
            // }
        },
    }
</script>

<template>
    <h5>counter session</h5>
    <h3>{{ newCount }}</h3>
    <h2>{{ number }}</h2>
    <label for="incrementCount">Increment by:</label>
    <!-- v-bind:value="incrementAmount"
        v-on:input="changeIncrementAmount" -->
    <input type="number" v-model="incrementAmount" />
    <button @click="incrementCount">Increment Number</button>
</template>