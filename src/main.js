import { createApp } from 'vue';

import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import UsersList from './components/users/UsersList';
import TeamsList from './components/teams/TeamsList';
import TeamMembers from './components/teams/TeamMembers';
import NotFound from './components/nav/NotFound';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Редирект. Если / , то идет в компонент /teams
        // Меняется ЮРЛ
        // {path: '/', redirect: '/teams'},
        // Используем альтернативный юрл как / для того чтобы установить по дефолту 
        // /teams
        {path: '/teams', component: TeamsList, alias: '/'},
        {path: '/users', component: UsersList},
        {path: '/teams/:teamId', component: TeamMembers, props: true},
        // Редиректим на компонент, если ЮРЛ инвалдиный (такого нет)
        // {path: '/:notFound(.*)', redirect: '/teams'}
        //
        {path: '/:notFound(.*)', component: NotFound}
        
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
