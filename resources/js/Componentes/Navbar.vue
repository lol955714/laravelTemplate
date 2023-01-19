<template>
    <div>
        <v-card>
            <v-layout>
                <v-app-bar color="info">
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer">
                    </v-app-bar-nav-icon>
                </v-app-bar>
                <v-navigation-drawer v-model="drawer">
                    <v-list>
                        <v-list-item v-for="item in items" :to="item.ruta">
                            {{ item.nombre }}
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-layout>
        </v-card>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            items: [
                { nombre: "Inicio", icon: "Foo", ruta: "/" },
                { nombre: "Contacto", icon: "Bar", ruta: "/contacto" },
            ],
            drawer: null,
        };
    },
    mounted() {
        this.login();
    },
    methods: {
        async login() {
            const { data } = await axios.post("/api/login", {
                email: "email@gmail.com",
                password: "noquiero",
            });
            console.log(data);
        },
    },
};
</script>
