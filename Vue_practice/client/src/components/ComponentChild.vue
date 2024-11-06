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
        <slot>Default name</slot><br />
        <slot name="namedSlot"></slot><br />
        <slot name='scopedSlot' :message="object" :person="person"></slot>
    </div>
</template>

<script setup>
import { defineProps,ref } from 'vue';

const props = defineProps({
        text: {
            type: String,
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

const object = {
    name: "John",
    age: 30,
    color: "yellow"
}

const person = {
    name: "Jim",   
    age: 40,
    color: "blue"
}


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