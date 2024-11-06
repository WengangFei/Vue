<template>
    <div>
        Component parent: 
        {{ text }}
    </div>
    <ComponentChild @clickName="handleClick" :returnName="choosedName"/>
    You clicked: {{ choosedName }}
</template>

<script setup>
import { defineProps,defineComponent, ref } from 'vue';
import ComponentChild from './ComponentChild.vue';

const choosedName = ref("");
const props = defineProps({
        text: {
            type: String,
            default: "Default Text",
        }
    });

const components = defineComponent({
    components: {
        ComponentChild,
    }
}) ;

const handleClick = (name) => {
    choosedName.value = name;
}   
</script>

<style lang="scss" scoped>

</style>