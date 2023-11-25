import { createRouter, createWebHistory } from "vue-router"

import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Reservas from '../views/Reservas.vue'
import Receitas from '../views/Receitas.vue'
//import Insumos from '../views/Insumos.vue'
import Fornecedores from '../views/Fornecedores.vue'
import Insumos from '../views/InsumosTemp.vue'
import About from '../views/About.vue'
import Feedback from '../views/Feedback.vue'
import Upload from '../views/UploadCsv.vue'
import Dashboard from '../views/Dashboard.vue'
import GestaoDePessoas from '../views/GestaoDePessoas.vue'

const base = '/api5-frontend/';

const routes = [
    { 
        path: '/',
        name: 'Login', 
        component: Login,
        meta: { requiresAuth: false, redirectIfAuth: true },
    },
    { 
        path: '/home',
        name: 'Home', 
        component: Home,
        meta: { requiresAuth: false, redirectIfAuth: false },
    },
    { 
        path: '/reservas', 
        name: 'Reservas',
        component: Reservas,
        meta: { requiresAuth: false, redirectIfAuth: false },
    },
    {
        path: '/receitas',
        name: 'Receitas',
        component: Receitas,
        meta: { requiresAuth: true, redirectIfAuth: false },
    },
    { 
        path: '/insumos',
        name: 'Insumos',
        component: Insumos,
        meta: { requiresAuth: false, redirectIfAuth: false },
    },
    {
        path: '/fornecedores',
        name: 'Fornecedores',
        component: Fornecedores,
        meta: { requiresAuth: true, redirectIfAuth: false },
    },
    { 
        path: '/about',
        name: 'About',
        component: About,
        meta: { requiresAuth: true, redirectIfAuth: false },
    },
    { 
        path: '/feedback',
        name: 'Feedback',
        component: Feedback,
        meta: { requiresAuth: true, redirectIfAuth: false },
    },
    {
        path:'/upload',
        name: 'Upload',
        component: Upload,
        meta: { requiresAuth: true, redirectIfAuth: false },
    },
    {
        path:'/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true, redirectIfAuth: false },
    },
    {
        path:'/funcionarios',
        name: 'Gestão de Pessoas',
        component: GestaoDePessoas,
        meta: { requiresAuth: true, redirectIfAuth: false },
    }

];


const router = createRouter({
    history: createWebHistory(base),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = sessionStorage.getItem('authToken');
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const redirectIfAuth = to.matched.some(record => record.meta.redirectIfAuth);
  
    if (requiresAuth && !token) {
      next({ name: "login" });
    } else if (redirectIfAuth && token) {
      next({ name: "Home" });
    } else {
      next();
    }
  });

export default router;