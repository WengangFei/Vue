<script>
    export default {
        props:{
            fun:{
                type: Object,
                required: true,
            },
            med:{
                type: Function,
                required: true,
            }
        },

        setup () {
            return {
                message: 'Come on!',
                listOfNumbers: [
                { id: '1', name: 'fei', n: [11, 22, 33] },
                { id: '2', name: 'wen', n: [11, 22, 33] },
                { id: '3', name: 'gang', n: [11, 22, 33] }
                ],
            }
        }
    }
</script>


<template>
    <div>
        <h3>Name:{{ fun.name }}</h3>
        <h3>Color:{{ fun.color }}</h3>
        <h3>Age:{{ fun.age }}</h3>
        <h3>Location:{{ med.location }}</h3>
        <h3>Food:{{ med.food }}</h3>
        <p v-if="message.length % 2 === 0">Even: {{ message }}</p>
        <p v-else>Odd: {{ message }}</p>
        <div v-for="num in listOfNumbers" :key="num.id">
        {{ num.name }}:
        <span v-for="item in num.n" :key="item">{{ item }}</span>
        </div>
    </div>
</template>



