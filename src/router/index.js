import Vue from 'vue';
import Router from 'vue-router';
const Login = r => require.ensure([], () => r(require('@/views/admin/login/login')), 'login');
const Layout = r => require.ensure([], () => r(require('@/views/layout')), 'layout');

const Share = r => require.ensure([], () => r(require('@/views/share')), 'share');
const User = r => require.ensure([], () => r(require('@/views/user')), 'user');
const Follow = r => require.ensure([], () => r(require('@/views/follow')), 'follow');
const Recommend = r => require.ensure([], () => r(require('@/views/follow/recommend')), 'recommend');
const Attention = r => require.ensure([], () => r(require('@/views/follow/attention')), 'attention');

Vue.use(Router);

export default new Router({
  linkActiveClass: 'router-active',
  linkExactActiveClass: 'router-active',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'share',
          component: Share,
        },
        {
          path: 'share',
          name: 'share',
          component: Share,
        },
        {
          path: 'user',
          name: 'user',
          component: User,
        },
        {
          path: 'follow',
          component: Follow,
          children: [
            {
              path: 'recommend',
              name: 'recommend',
              component: Recommend,
            },
            {
              path: 'attention',
              name: 'attention',
              component: Attention,
            },
          ],
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
