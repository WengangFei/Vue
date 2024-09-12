
import { defineStore } from 'pinia';
import { User } from '../assets/userInformation';
import { ref, reactive } from 'vue';

const useUserStorage = defineStore('user',()=>{

    let user = ref(undefined);
    const signInUser = (cre)=>{
        return reactive(new User(cre));
    }
    
    function updateUser(newUser){
        user.value = newUser;
    }

    return { user, signInUser, updateUser }
    
})

export default useUserStorage;