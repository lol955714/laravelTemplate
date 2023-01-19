import { createRouter, createWebHistory } from "vue-router";
const HomeComponent = () => import("../Componentes/HomeCom.vue");
const ContactoComponent = () => import("../Componentes/ContactoCom.vue");
const routes = [
    { path: "/", name: "home", component: HomeComponent },
    { path: "/contacto", name: "contacto", component: ContactoComponent },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;
