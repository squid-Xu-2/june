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
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/cate',
    name: 'Cate',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import('../views/cate/index.vue'),
        meta: { title: '分类' }
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
        meta: { title: '关于' }
      }
    ]
  }
]
