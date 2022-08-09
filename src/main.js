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
        // Вставляем дочерний роут
        // Для того чтобы его использовать в выбораном компоненте
        // Мы должны добавить еще 1 router-view чтобы его вставлять
        // Добавляет в родительском компоненте, на месте того, где хотим
        // чтобы компонент был вставлен
        {path: '/teams', component: TeamsList, children: [
            {path: ':teamId', component: TeamMembers, props: true}
        ]},
        {path: '/users', component: UsersList},
        {path: '/:notFound(.*)', component: NotFound},
        
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
