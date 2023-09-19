import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import Feedback from '../views/Feedback.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/Feedback', component: Feedback }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;