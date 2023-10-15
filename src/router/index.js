import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import Reservas from '../views/Reservas.vue'
import Receitas from '../views/Receitas.vue'
import Insumos from '../views/InsumosTemp.vue'
import About from '../views/About.vue'
import Feedback from '../views/Feedback.vue'
import Upload from '../views/UploadCsv.vue'
import Dashboard from '../views/Dashboard.vue'

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
        path: '/about',
        name: 'About',
        component: About 
    },
    { 
        path: '/feedback',
        name: 'Feedback',
        component: Feedback 
    },
    {
        path:'/upload',
        name: 'Upload',
        component: Upload
    },
    {
        path:'/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }

];


const router = createRouter({
    history: createWebHistory(base),
    routes,
});

export default router;