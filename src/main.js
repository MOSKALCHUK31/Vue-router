import { createApp } from 'vue';

// Import functions to creating router and history from package
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';

// Create router

const router = createRouter({
    history: createWebHistory(),
    routes: []
});

const app = createApp(App);

app.mount('#app');
