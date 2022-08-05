import { createApp } from 'vue';

// Import functions to creating router and history from package
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
// Import components, which have to be used in routing
import UsersList from './components/users/UsersList';
import TeamsList from './components/teams/TeamsList';

// Create router
const router = createRouter({
    history: createWebHistory(),
    // Первый параметр - ссылка [https://our-domain.com/teams]
    // Второй параметр - компонент, который мы импортировали
    // Если мы импортируем их в роуты, то в App.vue нам не нужно их определять
    routes: [
        {path: '/teams', component: TeamsList},
        {path: '/users', component: UsersList}
    ]
});

const app = createApp(App);

// Функция use для того чтобы использовать роуты
app.use(router);

app.mount('#app');
