import {
    createRouter,
    createWebHashHistory
} from "vue-router";

import login from '../views/login/Login.vue'
import register from '../views/register/Register.vue'
import forget from '../views/forget/Forget.vue'
import info from '../views/info/Info.vue'
import reset from '../views/reset/Reset.vue'
import home from '../views/home/home.vue'


const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: "/login",
        name: 'login',
        component: login
    }, {
        path: "/register",
        name: 'register',
        component: register
    },
    {
        path: "/forget",
        name: 'forget',
        component: forget
    },
    {
        path: "/info",
        name: 'info',
        component: info
    },
    {
        path: "/reset",
        name: 'reset',
        component: reset
    },
    {
        path: "/home",
        name: 'home',
        component: home
    }
];

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});

export default router;