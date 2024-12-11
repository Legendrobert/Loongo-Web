import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由配置
import './assets/font/font.css' // 全局公共样式





const app = createApp(App);


app.use(router); // 使用路由
app.mount('#app');

