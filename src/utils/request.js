import axios from 'axios'
import { ElLoading as Loading, ElMessage as Message } from 'element-plus'
import { isDev } from '@/utils/env';

const service = axios.create({
    // 基路径
    baseURL: isDev() ? 'http://localhost:8000' : 'https://loongo-appbackend.onrender.com/Loongo',
    timeout: 10000,
    withCredentials: false, // 修改为 false，避免跨域问题
    headers: {
        'Content-Type': 'application/json'
    }
});

// 自定义配置
const custom_options = Object.assign(
    {
        repeat_request_cancel: true, // 是否开启取消重复请求, 默认为 true
        loading: false, // 是否开启loading层效果, 默认为false
        reduct_data_format: true, // 是否开启简洁的数据结构响应, 默认为true
        error_message_show: true, // 是否开启接口错误信息展示,默认为true
        code_message_show: false // 是否开启code不为0时的信息提示, 默认为false
    },{}
)

// 请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做的
    // 存在token则往header里面添加一个token
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token')
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    Message.error('请求发送失败，请检查网络连接');
    return Promise.reject(error);
});

// 响应拦截器
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    if(response.data.code!=200){
        Message({
            type: 'error',
            message: response.data.message || '请求失败'
        })
        return Promise.reject(response.data)
    }
    return response;
}, function (error) {
    // 处理错误响应
    let errorMessage = '网络错误，请稍后重试';
    
    if (error.code === 'ECONNABORTED') {
        errorMessage = '请求超时，请检查网络连接';
    } else if (!error.response) {
        errorMessage = '无法连接到服务器，请检查网络连接';
    } else if (error.response.status === 404) {
        errorMessage = '请求的资源不存在';
    } else if (error.response.status === 500) {
        errorMessage = '服务器内部错误';
    } else if (error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
    }

    Message({
        type: 'error',
        message: errorMessage,
        duration: 5000
    });
    
    return Promise.reject(error);
});

export default service