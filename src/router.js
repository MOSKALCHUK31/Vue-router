import {createRouter, createWebHistory} from 'vue-router';
import UsersList from './pages/UsersList';
import TeamsList from './pages/TeamsList';
import TeamMembers from './components/teams/TeamMembers';
import NotFound from './pages/NotFound';
import TeamsFooter from './pages/TeamFooter';
import UsersFooter from './pages/UserFooter';

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
            components: {default: UsersList, footer: UsersFooter},
            
            //Вызывается в момент, когда меняется роут. [Локально к каждому компоненту]
            beforeEnter(to, from, next) {
                console.log('BefoureEnter [locally for this component]')
                console.log(to, from, next)
                next()
            },
            // Вызывается, когда роут уже поменялся. 
            // Нужен для отправки логов на серер
            // Хук роутов
            afterEnter(to, from) {
                console.log(to, from)
                // send analytycs of routes [loggs] to server
            }
        },
        {path: '/:notFound(.*)', component: NotFound},
    ],
    linkActiveClass: 'active',

    scrollBehavior(_, _2, savedPosition) {
        if (savedPosition) return savedPosition
        
        return {left: 0, top: 0}
    }
});

// Хук роута
// Вызывается в тот момент, когда меняется роут.
// В момент когда пользователь переходит по другому роуту, мы можем отследить его поведение
// Например, выдать модалку, если он не авторизирован. Тем самым перенаправить его на другой роут
// router.beforeEach(function(to, from, next) {
//     console.log(to, from, next)
//     next()
// })

export default router;