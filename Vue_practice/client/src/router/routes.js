
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import GoogleSignin from '../components/GoogleSignin.vue';
import App from '../App.vue';

const routes = [
    {
        path:'/home',
        name:'Home',
        component: HomePage
    },
    {
        path:'/about',
        name: 'About',
        component: AboutPage
    },
    {
        path:'/signin',
        name:'Signin',
        component:GoogleSignin
    },
    {   path:'/',
        name:'App',
        component:App
    }
]



export default routes