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
const firstName = ref("");
const lastName = ref("");
const fullName = computed({
    get: () => firstName.value + " " + lastName.value,
    set: (value) => {
        const names = value.split(" ");
        firstName.value = names[0] || "";
        lastName.value = names[1] || "";
    },
});
watch(
    ()=>fullName.value, 
    (newV, oldV) => {
    console.log("newV ==>", newV, "oldV ==>", oldV);
});

</script>
