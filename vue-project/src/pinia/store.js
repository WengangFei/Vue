import { defineStore } from 'pinia';

export const pinia = defineStore('piniaStore',{
    state(){
        return {
            name:'Pina',
            number:2
        }
    },

    getters:{
        changeName(state){
        return (state.name)
        }
    },

    actions:{

    }
})