<template>
    <form @submit.prevent="addNewAssignment">
        <input type="text" class="border-2 p-1 rounded-md" v-model="newAssignment" placeholder="Add new assignment"/>
        <input type="text" class="border-2 p-1 rounded-md" v-model="newTag" placeholder="Add new tag"/>
        <button-custom bgColor="bg-red-500" textColorName="text-white" content="Submit"></button-custom>
    </form>
</template>

<script>
    import ButtonCustom from './ButtonCustom.vue';
    export default {
        data() {
            return {
                newAssignment: '',
                newTag: '',
            }
        },

        methods: {            
            addNewAssignment() {
                this.$emit('add-assignment', {name: this.newAssignment, tag: this.newTag });
                this.newAssignment = '';
                this.newTag = '';
            }
        },
        components: {   
            ButtonCustom
        }
    }
</script>

<style lang="scss" scoped>

</style>