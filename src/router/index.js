import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontView.vue'),
      children: [
        {
          path: '',
          component: ()=>import('../views/front/HomeView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/front/AboutView.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/front/ProductsView.vue')
        },
        {
          path: 'carts',
          name: 'carts',
          component: () => import('../views/front/CartView.vue')
        }
      ]
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'products',
          name: 'adminProducts',
          component: () => import('../views/dashboard/ProductsView.vue')
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('../views/dashboard/OrdersView.vue')
        },
        {
          path: 'coupons',
          name: 'coupons',
          component: () => import('../views/dashboard/CouponsView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
  ]
})

export default router
