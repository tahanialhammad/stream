import Vue from "vue"; //tt
import VueRouter from 'vue-router';
Vue.use(VueRouter);//t
import Home from "./views/Home.vue"; //t


let routes = [
    {
        path: '/',
        name: "Home", //t
        component: Home //t
    },
    {
        path: '/about',
        name: "about",
        // component: require('./views/About.vue')
        component: () => import("./views/About.vue") //t
    },
    {
        path: '/contact',
        name: "contact",
        component: () => import("./views/Contact.vue") //t

    }
];

export default new VueRouter({
    routes,
    linkActiveClass: 'is-active'
});
