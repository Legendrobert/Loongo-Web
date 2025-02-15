
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
// import ElementPlusIconsVue from '@element-plus/icons-vue' 
// import AMapLoader from '@amap/amap-jsapi-loader';
import 'element-plus/dist/index.css'
import router from './router'; // 引入路由配置
import store from './store'
import './assets/font/font.css' // 全局公共样式

// import 'element-plus/dist/index.css';
// import * as ElIcons from '@element-plus/icons-vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 注册所有 Element Plus 图标
// for (const [key, component] of Object.entries(ElIcons)) {
//     app.component(key, component);
//   }






const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router); // 使用路由
app.use(store)
// app.use(AMapLoader) // 高德地图
app.use(ElementPlus); // 使用路由
// app.use(ElementPlusIconsVue);
// app.use(ElementPlus)
app.mount('#app');

