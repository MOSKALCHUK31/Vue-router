import { createApp } from 'vue';

import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import UsersList from './components/users/UsersList';
import TeamsList from './components/teams/TeamsList';
import TeamMembers from './components/teams/TeamMembers';
import NotFound from './components/nav/NotFound';
import TeamsFooter from './components/teams/TeamFooter';
import UsersFooter from './components/users/UserFooter';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Использование двух слотов под роут в одном компоненте
        {
            name: 'teams', 
            path: '/teams', 
            // Вместо component указывает components и слудем логике как и в слотах
            // Ставим имя определенному роут-вью и во внутрь ставим компонент по имени.
            components: {default: TeamsList, footer: TeamsFooter}, 
            children: [{name: 'team-member',path: ':teamId', component: TeamMembers, props: true}]
        },
        {
            name: 'users',
            path: '/users', 
            components: {default: UsersList, footer: UsersFooter}
        },
        {path: '/:notFound(.*)', component: NotFound},
    ],
    linkActiveClass: 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
