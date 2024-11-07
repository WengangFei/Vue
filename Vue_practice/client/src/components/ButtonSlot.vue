<template>
    <button @mouseenter="hover = true" @mouseleave="hover = false">
        <slot name="scopedSlot" :changIcon="hover">🥬</slot>
        <slot>Button</slot>
    </button>
    
</template>

<script setup>
import { h, ref } from 'vue';

    const person={
        name:"Fei",
        age:18
    }
    const hover = ref(false);
</script>