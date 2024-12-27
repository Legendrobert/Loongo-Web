import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'; // 引入路由配置
import store from './store'
import './assets/font/font.css' // 全局公共样式





const app = createApp(App);


app.use(router); // 使用路由
app.use(store)
app.use(ElementPlus); // 使用路由
app.mount('#app');

