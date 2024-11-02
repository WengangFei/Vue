<template>
    <div>
        <ChildCom v-model:modelValue="name1" v-model:nextName="name2"/>
        Name: {{ name1 }}
        Name2: {{ name2 }}
    </div>
</template>

<script>
    import ChildCom from './ChildCom.vue';
    export default {
        data(){
            return{
                name1:'default',
                name2:'default2',
            }
        },

        components:{
            ChildCom
        }
    }
</script>

<style lang="scss" scoped>

</style>