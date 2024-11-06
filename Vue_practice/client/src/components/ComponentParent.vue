<template>
    <div ref="temp">
        Component parent: 
        {{ text }}
    </div>
    <ComponentChild @clickName="handleClick" :returnName="choosedName" text="Children"> 
        Default slot
        <template #namedSlot>Named slot</template>
        <template #scopedSlot="slotProps">Scoped slot: {{ slotProps }}"</template>
    </ComponentChild>
    You clicked: {{ choosedName }}
</template>

<script setup>
import { defineProps,defineComponent, ref } from 'vue';
import ComponentChild from './ComponentChild.vue';
import { onUnmounted, onMounted } from 'vue';

const choosedName = ref("");
const temp = ref();
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
};
onMounted(() => {
    console.log('Mounted the component.');
});
onUnmounted(() => {
    console.log('Unmounted the component.');
});

</script>

<style lang="scss" scoped>

</style>