
import { defineStore } from 'pinia';
import { User } from '../assets/userInformation';
import { ref, reactive } from 'vue';

const useUserStorage = defineStore('user',()=>{

    let user = reactive(new User());
 

    return { user }
    
})

export default useUserStorage;