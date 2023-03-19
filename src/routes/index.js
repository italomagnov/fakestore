import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/Home.vue';
import CheckoutPage from '../pages/Checkout.vue';

const routes = [
    {
        path: '/',
        name: HomePage,
        component: HomePage,
    },
    {
        path: '/checkout',
        name: CheckoutPage,
        component: CheckoutPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
