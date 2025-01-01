import { createRouter, createWebHistory } from 'vue-router';

// 懒加载页面组件
// const Itinerary = () => import('@/views/NavItinerary.vue');
const Main = () => import('@/views/NavMain/index.vue');
const All = () => import('@/views/NavMain/All.vue')
const Eastern = () => import('@/views/NavMain/Eastern.vue')
const WestSouth = () => import('@/views/NavMain/Western&Southern.vue')
const Northern = () => import('@/views/NavMain/Northern.vue')
const Central = () => import('@/views/NavMain/Central.vue')
const Explore = () => import('@/views/NavExplore.vue');
// const Profile = () => import('@/views/NavProfile.vue');
const NotFound = () => import('@/views/NotFound.vue');



// 定义路由
const routes = [
  // {
  //   path: '/',
  //   name: 'Itinerary',
  //   component: Itinerary,
  //   meta: { title: 'Itinerary Page' }, // 可以定义一些额外的meta信息
  // },
  {
    path: '/',
    redirect: '/main/all', // 访问 '/' 时重定向到 '/main/all'
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main,
    meta: { title: 'Main Page' },
    redirect: '/Main/All',
    children: [
      {
        path: 'All',
        name: 'All',
        component: All,
        meta: { title: 'All Page'}
      },{
        path: 'Eastern',
        name: 'Eastern',
        component: Eastern,
        meta: { title: 'Eastern Page'}
      },{
        path: 'WestSouth',
        name: 'Western & Southern',
        component: WestSouth,
        meta: { title: 'Western & Southern Page'}
      },{
        path: 'Northern',
        name: 'Northern',
        component: Northern,
        meta: { title: 'Northern Page'}
      },{
        path: 'Central',
        name: 'Central',
        component: Central,
        meta: { title: 'Central Page'}
      }
    ]
  },
  {
    path: '/Explore',
    name: 'Explore',
    component: Explore,
    meta: { title: 'Explore Page' },
  },
  // {
  //   path: '/Profile',
  //   name: 'Profile',
  //   component: Profile,
  //   meta: { title: 'Profile Page' },
  // },
  {
    path: '/:catchAll(.*)', // 404页面
    name: 'notfound',
    component: NotFound,
  },
];

// 创建路由实例
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

// 导航守卫
// router.beforeEach((to, from, next) => {
//   // 处理页面标题
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }

//   // 认证检查
//   if (to.meta.requiresAuth) {
//     const isAuthenticated = localStorage.getItem('authToken'); // 假设用 localStorage 存储认证信息
//     if (!isAuthenticated) {
//       next({ name: 'home' }); // 如果没有认证，跳转到首页
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

// 导出路由实例
export default router;
