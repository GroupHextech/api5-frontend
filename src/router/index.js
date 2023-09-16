import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import Insumos from '../components/Insumos.vue'
import About from '../components/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/insumos', component: Insumos },
    {path: '/about', component: About },

];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;