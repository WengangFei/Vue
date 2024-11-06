<template>
  <button
    class="bg-red-400 text-white px-1 rounded-md"
    @click="($event) => count++"
  >
    Fresh start: {{ count }}
  </button>
  {{ name }}
</template>

<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  name:{
    type: String,
    default: "Fei"
  }
});

const count = ref(0);
</script>
