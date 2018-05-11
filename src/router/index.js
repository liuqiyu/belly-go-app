import Vue from 'vue';
import Router from 'vue-router';
const Login = r => require.ensure([], () => r(require('@/views/admin/login/login')), 'login');
const Layout = r => require.ensure([], () => r(require('@/views/layout')), 'layout');

const Share = r => require.ensure([], () => r(require('@/views/share')), 'share');

Vue.use(Router);

export default new Router({
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
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
