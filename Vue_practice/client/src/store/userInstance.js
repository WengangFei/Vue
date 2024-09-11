
import { defineStore } from 'pinia';
import { User } from '../assets/userInformation';
import { ref, reactive } from 'vue';


const useUserStorage = defineStore('user',()=>{
    const user = ref(undefined);
    const signInUser = (cre)=>{

        return reactive(new User(cre));
    }
    

    return { user, signInUser }
    
})

export default useUserStorage;