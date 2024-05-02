import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import '@/assets/main.css';
import '@/assets/tailwind.css';
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Britto from './components/Britto.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/idioms', component: HelloWorld },
        { path: '/', component: Britto },
    ]
});

createApp(App).use(router).mount('#app')
