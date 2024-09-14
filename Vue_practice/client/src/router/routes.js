
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import GoogleSignin from '../components/GoogleSignin.vue';
import App from '../App.vue';

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
    {
        path:'/signin',
        name:'Signin',
        component:GoogleSignin
    },
    {   path:'/',
        name:'Signin',
        component:GoogleSignin
    }
]



export default routes