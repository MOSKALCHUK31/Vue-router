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
        {
            name: 'teams', 
            path: '/teams', 
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
    linkActiveClass: 'active',
    // Поведение скролла. Работает только в том случае, если используеться
    // кнопка назад в браузере.
    // from - из какого компонента/роута мы пришли
    // to - в какой компонент/роут мы идем
    // savedPosition - сохраняется позиция скролла, если мы возвращаемся "Назад"
    // с помощью кнопки в браузере
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)

        if (savedPosition) return savedPosition
        
        return {left: 0, top: 0}
    }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
