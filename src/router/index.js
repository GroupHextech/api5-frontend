import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import Insumos from '../views/Insumos.vue'
import About from '../views/About.vue'
import Feedback from '../views/Feedback.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/insumos', component: Insumos },
    {path: '/about', component: About },
    {path: '/Feedback', component: Feedback }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;