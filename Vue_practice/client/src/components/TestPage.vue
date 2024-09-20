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

</template>

<script>
    export default {
        data() {
            return {
                data: {
                    name: 'test',
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
            
        }
    }
</script>
