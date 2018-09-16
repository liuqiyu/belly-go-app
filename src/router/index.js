import Vue from 'vue';
import Router from 'vue-router';
const Login = r => require.ensure([], () => r(require('@/views/admin/login/login')), 'login');
const Register = r => require.ensure([], () => r(require('@/views/admin/register/index')), 'register');
const Layout = r => require.ensure([], () => r(require('@/views/layout')), 'layout');

const Share = r => require.ensure([], () => r(require('@/views/share')), 'share');
const Follow = r => require.ensure([], () => r(require('@/views/follow')), 'follow');
const Recommend = r => require.ensure([], () => r(require('@/views/follow/recommend')), 'recommend');
const Attention = r => require.ensure([], () => r(require('@/views/follow/attention')), 'attention');
const Cart = r => require.ensure([], () => r(require('@/views/cart')), 'cart');
const User = r => require.ensure([], () => r(require('@/views/user')), 'user');
const Info = r => require.ensure([], () => r(require('@/views/user/info/info')), 'info');
const Product = r => require.ensure([], () => r(require('@/views/product')), 'product');

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
          component: Share,
        },
        {
          path: 'share',
          name: 'share',
          component: Share,
        },
        {
          path: 'follow',
          component: Follow,
          redirect: '/follow/recommend',
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
        {
          path: 'cart',
          name: 'cart',
          component: Cart,
        },
        {
          path: 'user',
          name: 'user',
          component: User,
          children: [
            {
              path: 'info',
              name: 'info',
              component: Info,
            },
          ],
        },
      ],
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
  ],
});
