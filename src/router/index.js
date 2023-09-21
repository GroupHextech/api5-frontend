import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import Insumos from '../views/Insumos.vue'
import About from '../views/About.vue'
import Feedback from '../views/Feedback.vue'
import EntraSai from '../components/EntradaSaidas.vue'

const base = '/api5-frontend';

const routes = [
    { path: '/', component: Home },
    { path: '/insumos', component: Insumos },
    { path: '/about', component: About },
    { path: '/feedback', component: Feedback },
    { path: '/entradasaida', component: EntraSai},
];

const router = createRouter({
    history: createWebHistory(base),
    routes,
});

export default router;