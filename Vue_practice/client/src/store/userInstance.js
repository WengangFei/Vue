
import { defineStore } from 'pinia';
import { User } from '../assets/userInformation';
import { ref, reactive } from 'vue';
import envConfigs from "@/envConfigs.json";


const useUserStorage = defineStore('user',()=>{

    let user = reactive(new User(envConfigs.dev.client_id));
    user.initApp();
    return { user }
    
})

export default useUserStorage;