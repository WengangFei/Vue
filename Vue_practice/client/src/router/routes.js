
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import GoogleSignin from '../components/GoogleSignin.vue';
import CallBack from '../components/CallBack.vue'
import App from '../App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import FetchDataFromDB from '../components/FetchDataFromDB.vue';

const routes = [
    {
        path:'/home',
        name:'Home',
        component: HomePage,
        meta: { requiresAuth: true }
    },
    {
        path:'/about',
        name: 'About',
        component: AboutPage,
        meta: { requiresAuth: true }
    },
    {   path:'/',
        name:'Signin',
        component:GoogleSignin
    },
    // Catch-all route for 404 Not Found
    {
        path: '/:pathMatch(.*)*',
        name: '/',
        component: GoogleSignin,
    },
    {
        path: '/callback',
        name: 'Callback',
        component: CallBack,
    },
    {
        path: '/fetch-data',
        name: 'FetchDataFromDB',
        component: FetchDataFromDB
    }  

]

const router = createRouter({
    history: createWebHistory(),
    routes
})



export default router