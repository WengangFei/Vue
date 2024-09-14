import { defineStore } from 'pinia';

const useProfileStore = defineStore('profile',{
    state: ()=>{
        return {
            name: 'fei',
            age: 40
        }
    }
})

export default useProfileStore;