import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import Reservas from '../views/Reservas.vue'
import Receitas from '../views/Receitas.vue'
import Insumos from '../views/Insumos.vue'
import Fornecedores from '../views/Fornecedores.vue'
import About from '../views/About.vue'
import Feedback from '../views/Feedback.vue'

const base = '/api5-frontend/';

const routes = [
  
    { 
        path: '/',
        name: 'Home', 
        component: Home 
    },
    { 
        path: '/reservas', 
        name: 'Reservas',
        component: Reservas
    },
    {
        path: '/receitas',
        name: 'Receitas',
        component: Receitas
    },
    { 
        path: '/insumos',
        name: 'Insumos',
        component: Insumos
    },
    {
        path: '/fornecedores',
        name: 'Fornecedores',
        component: Fornecedores
    },
    { 
        path: '/about',
        name: 'About',
        component: About 
    },
    { 
        path: '/feedback',
        name: 'Feedback',
        component: Feedback 
    }

];


const router = createRouter({
    history: createWebHistory(base),
    routes,
});

export default router;