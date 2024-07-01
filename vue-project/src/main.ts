import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import { createRouter,
    createWebHashHistory,
    createMemoryHistory,
    createWebHistory } from 'vue-router';
import { routes } from '@/routers.js';
import { createPinia } from 'pinia';

//create router instance
const router = createRouter({
    history: createWebHistory(),
    routes,
});

const pinia = createPinia();
// app.use(router)
// app.mount('#app')
createApp(App).use(router).use(pinia).mount('#app')