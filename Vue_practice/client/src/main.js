import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router/routes.js';
import { createPinia } from 'pinia';
import useUserStorage from './store/userInstance';
import ComponentParent from './components/ComponentParent.vue';
// localStorage.clear();

const app = createApp(App);

app.use(createPinia());
app.component('ComponentParent', ComponentParent);

//authenticate the auth before direct to other routes
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Get the token from localStorage or some other storage
    const token = localStorage.getItem('googleToken');
    
    if (!token) {
      // If no token is found, redirect to login page
      next({
        path: '/',
      });
    } else {
      // If token is found, proceed to the route
      next();
    }
  } else {
    // If no authentication is required, proceed as normal
    next();
  }
});

app.use(router);
app.mount('#app');
