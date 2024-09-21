<template>
    <div>
        Data: {{ data.name }}
    </div>
    <button 
    @click="changeContent" 
    :class="buttonStyle">
        Click
    </button>
    <hr class="border-red-500 m-4" />
    {{ inprogress.length }}
    {{ completed.length }}
    <ul v-if="inprogress.length">
        <p>In progress</p>
        <li v-for="assignment in assignments" :key="assignment.name">
        <label v-if="!assignment.completed">
            {{ assignment.name }} 
            <input type="checkbox" v-model="assignment.completed">
        </label>
        
        </li>
    </ul>

    <ul class="mt-4" v-if="completed.length">
        <p>Completed</p>
        <li v-for="assignment in assignments" :key="assignment.name">
        <label v-if="assignment.completed">
            {{ assignment.name }} 
            <input type="checkbox" v-model="assignment.completed">
        </label>
        
        </li>
    </ul>
    <hr class="border-red-500 m-4" />
    <test-page-child :parent="data" :fei="data"><br />
        Default Content<br />
        Named Slot:
        <template #child>Named Slot Content</template>
        <template #child2> Named Slot 2 Content<br /></template>
        <template #scopedSlot="slotProps"> Scoped Slot Content: {{ slotProps.child.group }} {{ slotProps.child.color }}</template>

    </test-page-child>
    <hr class="border-red-500 m-4" />
    <button-custom 
        content="Change"    
        bgColor="bg-red-500"    
        textColorName="text-white"
      
        >
    </button-custom>
   
   
</template>

<script>
import TestPageChild from './TestPageChild.vue';
import ButtonCustom from './ButtonCustom.vue';

    export default {
        data() {
            return {
                data: {
                    name: 'From parent test',
                    age:40
                },
                buttonStyle:'bg-red-400 text-white px-1 rounded-md',
                isChanged:false,
                assignments:[
                    {
                        name:'assignment 1',
                        completed:false
                    },
                    {
                        name:'assignment 2',
                        completed:false
                    },
                    {
                        name:'assignment 3',
                        completed:false
                    }
                ]
            }
        },
        methods: {
            changeContent() {
                this.isChanged = !this.isChanged;
                this.isChanged ? this.buttonStyle = 'bg-green-400 text-white px-1 rounded-md' : this.buttonStyle = 'bg-red-400 text-white px-1 rounded-md';
                this.isChanged ? this.data.name = 'changed' : this.data.name = 'test';
            }
        },
        computed:{
            inprogress() {
                return this.assignments.filter(assignment => !assignment.completed);
            },
            completed() {
                return this.assignments.filter(assignment => assignment.completed);
            }
        },
        created() {
            
        },
        components: { 
            TestPageChild,
            ButtonCustom,
         }
    }

</script>
