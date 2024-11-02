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
    {{  allTags }}
    <div class="flex">
        <button 
            v-for="tag in allTags" :key="tag" 
            :class="tagStyle(tag)"
            @click="addSelectedTages(tag)">
            {{ tag }}
        </button>
    </div>
    <ul v-if="inprogress.length">
        <p>In progress</p>
        <li v-for="assignment in assignments" :key="assignment.name">
        <label v-if="!assignment.completed">
            {{ assignment.name }} 
            <input type="checkbox" v-model="assignment.completed">
        </label>
        
        </li>
    </ul>
{{ args }}
    <ul class="mt-4" v-if="completed.length">
        <p>Completed</p>
        <li v-for="assignment in assignments" :key="assignment.name">
        <label v-if="assignment.completed">
            {{ assignment.name }} 
            <input type="checkbox" v-model="assignment.completed">
        </label>
        
        </li>
    </ul>
    <form-submit @add-assignment="args=$event"></form-submit>
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
import FormSubmit from './FormSubmit.vue';
import { all } from 'axios';


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
                        completed:false,
                        tag:'reading'
                    },
                    {
                        name:'assignment 2',
                        completed:false,
                        tag:'math',
                    },
                    {
                        name:'assignment 3',
                        completed:false,
                        tag:'english',
                    }
                ],
                args:''
               
            }
        },
        methods: {
            changeContent() {
                this.isChanged = !this.isChanged;
                this.isChanged ? this.buttonStyle = 'bg-green-400 text-white px-1 rounded-md' : this.buttonStyle = 'bg-red-400 text-white px-1 rounded-md';
                this.isChanged ? this.data.name = 'changed' : this.data.name = 'test';
            },
            addNewAssignment(payload) {
                this.assignments.push({
                    name: payload.name,
                    completed: false,
                    tag: payload.tag,
                })
            },
            addSelectedTages(tag) { 
                
            this.assignments.forEach(assignment => {
                if(assignment.tag === tag && !assignment.selected) {
                    assignment['selected'] = true;
                }
                else if(assignment.tag === tag && assignment.selected) {
                    assignment['selected'] = false;
                }
            })

            // console.log(this.assignments)
            },
            initializeAllTags() {
                const tags = [...new Set(this.assignments.map(assignment => assignment.tag))];
                this.allTags = tags.map(tag => ({ name: tag, selected: false }));
            },
            tagStyle(tag){
                const flag = this.assignments.filter(t => t.tag === tag)[0].selected;
                return !flag ? "border-2 border-red-500 rounded-md px-1 mx-1 hover:bg-red-500 hover:text-white " : "bg-green-500 border-2 border-red-500 rounded-md px-1 mx-1"
            },
        },
        mounted() {
            this.initializeAllTags();
        },

        computed:{
            inprogress() {
                return this.assignments.filter(assignment => !assignment.completed);
            },
            completed() {
                return this.assignments.filter(assignment => assignment.completed);
            },
            selectedTags(){
                return this.allTags.filter(t => t.selected).map(obj => Object.values(obj)[0]);
            },
            allTags() {
                return [...new Set(this.assignments.map(assignment => assignment.tag))];
            }
        },
        created() {
            
        },
        components: { 
            TestPageChild,
            ButtonCustom,
            FormSubmit,
         }
    }
</script>
