import "./bootstrap";
import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./App.vue";
import RouterWeb from "./router/index";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import NavbarComponent from "@/Componentes/Navbar.vue";
const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
});
app.use(RouterWeb);
app.use(vuetify);
app.component("Navbar", NavbarComponent);
app.mount("#app");
