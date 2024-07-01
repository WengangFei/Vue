

export const routes = [
    {
        path:'/',
        component: ()=>import('./components/HomePage.vue')
    },
    {
        path:'/login',
        component: ()=>import('./components/LoginPage.vue')
    },
    {
        path:'/users',
        component:()=>import('./components/UserPage.vue')
    },
    {
        path:'/users/:id',
        component:()=>import('./components/SingleUserPage.vue')
    },

]