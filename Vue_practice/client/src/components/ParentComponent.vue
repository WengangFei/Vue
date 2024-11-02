<template>
    <div>
        <ChildrenComponent v-model:modelValue="name1" v-model:secondValue="name2"/>
        Name1: {{ name1 }}
        Name2: {{ name2 }}
    </div>
</template>

<script>
    import ChildrenComponent from "./ChildrenComponent.vue";
    export default {

        data() {
            return {
                name1: '',
                name2:  ''
            }
        },
        components: {
            ChildrenComponent
        }   
    }
</script>

