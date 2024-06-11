const Layout = () => import('../layout/index.vue')

export const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue'),
        meta: { title: '首页', icon: 'House' }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/AboutView.vue'),
        meta: { title: '关于', icon: 'home' }
      }
    ]
  }
]
