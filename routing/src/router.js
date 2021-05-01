import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersList from './pages/UsersList.vue';
import UsersFooter from './pages/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('Users beforeEnter');
        console.log(to, from);
        next();
      }
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],

  linkActiveClass: 'active',

  scrollBehavior(to, from, savedPosition) {
    console.log('Scroll Behavior');
    console.log(to, from, savedPosition);

    return {
      left: 0,
      top: 0,
      ...savedPosition,
      behavior: 'smooth'
    };
  }
});

router.beforeEach(function(to, from, next) {
  console.log('Global beforeEach');
  console.log(to, from);
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
  if (to.meta.needsAuth) {
    console.log('Needs Auth!');
  }
  next();
});

router.afterEach(function(to, from) {
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
