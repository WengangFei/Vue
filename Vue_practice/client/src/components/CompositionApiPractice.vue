<template>
  <h1>Composition API Practice:</h1>
  <div>
    <p>Age: {{ age }}</p>
    <p>Double Age: {{ doubleAge }}</p>
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <p>Full Name: {{ fullName }}</p>
    <input
      v-model.lazy="fullName"
      placeholder="Enter your name"
      class="border-2"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const age = ref(10);
const doubleAge = computed(() => age.value * 2);
const firstName = ref("Fei");
const lastName = ref("Wengang");
const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (newValue) => {
    const [first, last] = newValue.split(" ");
    firstName.value = first || "";
    lastName.value = last || "";
  },
});
// const fullName = computed(()=>`${firstName.value} ${lastName.value}`)

watch(
    ()=>firstName.value, 
    (newV, oldV) => {
    console.log('with value');
});
watch(
    fullName, 
    (newV, oldV) => {
    console.log('no value');
});
</script>
