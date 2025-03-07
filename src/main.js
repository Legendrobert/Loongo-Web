/*
 * @Author: caoxiuyuan@youlu.com
 * @Desc: 
 * @Autor: caoxiuyuan
 * @Date: 2024-11-19 21:55:35
 * @LastEditors: caoxiuyuan@youlu.com
 * @LastEditTime: 2025-02-28 22:49:04
 */

import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'; // 引入路由配置
import store from './store'
import './assets/font/font.css' // 全局公共样式


import * as ElementPlusIconsVue from '@element-plus/icons-vue'







const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(router); // 使用路由
app.use(store)
app.use(ElementPlus); // 使用路由

app.mount('#app');

