<template>
    <div>
        <input class="border-2" placeholder="Name input" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"/>
        <input class="border-2" placeholder="Name input" :value="secondValue" @input="$emit('update:secondValue',$event.target.value)"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {    
            modelValue: String,     
            secondValue: String,
        },
        methods: {

        },
        computed: {

        }
    }
</script>
