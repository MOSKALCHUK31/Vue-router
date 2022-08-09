import { createApp } from 'vue';

import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import UsersList from './components/users/UsersList';
import TeamsList from './components/teams/TeamsList';
import TeamMembers from './components/teams/TeamMembers';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/teams', component: TeamsList},
        {path: '/users', component: UsersList},
        {path: '/teams/:teamId', component: TeamMembers}
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
