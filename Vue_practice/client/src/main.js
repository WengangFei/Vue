import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import routes from './router/routes'
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import useUserStorage from './store/userInstance';


const app = createApp(App);

app.use(createPinia());
// localStorage.clear();
const router = createRouter({
    history: createWebHistory(),
    routes
})

//authenticate the auth before direct to other routes
router.beforeEach((to,from,next)=>{
    if(to.path !== '/signin' && !localStorage.getItem('googleToken')){
        next('/signin');
    }
    else{
        next();
    }
})


app.use(router);
app.mount('#app')
