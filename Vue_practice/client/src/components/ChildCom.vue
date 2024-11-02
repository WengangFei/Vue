<template>
    <div>
        <input class="border-2" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
        <input class="border-2" :value="nextName" @input="$emit('update:nextName', $event.target.value)" />
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: String,
                required: true
            },

            nextName: {
                type: String,
                required: true
            } 
        },

        // emits: ['update:modelValue']
    }
</script>

<style lang="scss" scoped>

</style>