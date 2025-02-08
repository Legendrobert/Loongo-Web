import { createRouter, createWebHistory } from 'vue-router';

// 懒加载页面组件
// const Itinerary = () => import('@/views/NavItinerary.vue');
// Main 模块
const Main = () => import('@/views/NavMain/index.vue');

// Explore 模块
const Explore = () => import('@/views/NavExplore/index.vue');
const All = () => import('@/views/NavExplore/All.vue')
const Eastern = () => import('@/views/NavExplore/Eastern.vue')
const WestSouth = () => import('@/views/NavExplore/Western&Southern.vue')
const Northern = () => import('@/views/NavExplore/Northern.vue')
const Central = () => import('@/views/NavExplore/Central.vue')
const Details = () => import('@/views/cityDetails/index.vue')
// const MapDetails = () => import('@/views/cityDetails/mapView/index.vue')

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
    name: 'Main',
    component: Main,
    meta: { title: 'Main Page' }, // 可以定义一些额外的meta信息
  },
  {
    path: '/Explore',
    name: 'Explore',
    component: Explore,
    meta: { title: 'Explore Page' },
    redirect: '/Explore/All',
    children: [
      {
        path: 'All',
        name: 'All',
        component: All,
        meta: { title: 'All Page'},
        children: [
          {
            path: 'Details/:cityName',
            name: 'Details',
            component: Details,
            meta: { title: 'Details Page' }
          }
          // ,
          // {
          //   path: 'MapDetails/:cityName',
          //   name: 'MapDetails',
          //   component: MapDetails,
          //   meta: { title: 'MapDetails Page' }
          // }
        ]
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
