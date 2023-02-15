import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";

const routes = [
    {
        path: "/",
        name: "login",
        component: Login,
    },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/Home.vue"),
    },
];

var router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    // return { name: 'Login' }
    if (

        // make sure the user is authenticated
        localStorage.getItem('token') === null &&
        // ❗️ Avoid an infinite redirect
        to.name !== 'login'
    ) {
        // redirect the user to the login page
        return { name: 'login'}
    }
})

export default router;