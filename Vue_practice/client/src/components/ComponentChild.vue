<template>
    <div>
        Component Child: {{ text }}
        <ul>
            <li v-for="name in names" :key="name">
                {{ name }}
                <button 
                    :class="{'color-blue': name === returnName,'color-red': name !== returnName}" 
                    @click="emit('clickName', name)">
                    Click
                </button>
            </li>
        </ul>
    </div>
  
</template>

<script setup>
import { defineProps,ref } from 'vue';

const props = defineProps({
        text: {
            type: String,
            default: "Children",
            validator(value) {
                return value.startsWith("");
            }
        },
        returnName: {
            type: String,
            required: true,
        }
    });
const names = ref(["John", "Doe",'Smith']);
const emit = defineEmits({
    clickName: (payload) => {
        return typeof payload === 'string';
    }
});


</script>

<style scoped>
    .color-red {
        background-color: red;
        color: white;
        border-radius: 3px;
        padding: 2px;
        margin:1px 0 1px 0;
    }

    .color-blue {
        background-color: blue;
        color: white;
        border-radius: 3px;
        padding: 2px;
        margin:1px 0 1px 0;
    }
</style>