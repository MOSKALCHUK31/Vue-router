import { createApp } from 'vue';

import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import UsersList from './components/users/UsersList';
import TeamsList from './components/teams/TeamsList';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/teams', component: TeamsList},
        {path: '/users', component: UsersList}
    ],
    // По дефолту (можно не писать)
    // linkActiveClass: 'router-link-active'
    // Переопределение активного класа
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
