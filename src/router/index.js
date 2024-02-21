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
          component: () => import('../views/front/HomeView.vue')
        },
        {
          path: 'about',
          component: () => import('../views/front/AboutView.vue')
        },
        {
          path: 'products',
          component: () => import('../views/front/ProductsView.vue')
        },
        {
          path: 'carts',
          component: () => import('../views/front/CartView.vue')
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/dashboard/ProductsView.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/dashboard/OrdersView.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/dashboard/CouponsView.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    },
  ]
})

export default router
