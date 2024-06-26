<script>
import { parseConfigFileTextToJson } from 'typescript'
import NameCard from './NameCard.vue'
export default {
  props: {
    fun: {
      type: Object,
      required: true
    },
    med: {
      type: Function,
      required: true
    }
  },

  emits: ['change-name', 'change-age'],

  methods: {
    changeDocName() {
      this.$emit('change-name')
    },

    changeAge() {
      this.$emit('change-age')
    },

    addNumber(payload) {
      this.listOfNumbers.find((item) => item.id === payload.number).n.push(this.numAdded)
      //reset the input
      this.val.target.value = ''
    },
    numToAdd(payload) {
      this.numAdded = Number(payload.event.target.value)
      this.val = payload.event
    }
  },

  data() {
    return {
      message: 'Come on!',
      listOfNumbers: [
        { id: '1', name: 'fei', n: [1, 2] },
        { id: '2', name: 'wen', n: [4, 8, 3] },
        { id: '3', name: 'gang', n: [5, 7, 9] }
      ],
      numAdded: 0,
      val: ''
    }
  },

  // registered the component
  components: { NameCard }
}
</script>

<template>
  <div>
    <h3>Name:{{ fun.name }}</h3>
    <button @click="changeDocName">Change Name</button>
    <h3>Color:{{ fun.color }}</h3>
    <h3>Age:{{ fun.age }}</h3>
    <button @click="changeAge">Change Age</button>
    <h3>Location:{{ med.location }}</h3>
    <!-- <h3>Food:{{ console.log(med()) }}</h3> -->
    <p v-if="message.length % 2 === 0">Even: {{ message }}</p>
    <p v-else>Odd: {{ message }}</p>
    <div v-for="num in listOfNumbers" :key="num.id">
      {{ num.name }}:
      <NameCard :num="num" @input-number="numToAdd" @click-button="addNumber" />
    </div>
  </div>
</template>
