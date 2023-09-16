import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import Insumos from '../components/Insumos.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/insumos', component: Insumos },

];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;