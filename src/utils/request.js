import axios from 'axios'
import { ElLoading as Loading, ElMessage as Message } from 'element-plus'
import { isDev } from '@/utils/env';
const service = axios.create({
    // 基路径
    baseURL: import.meta.env.VUE_APP_BASE_URL,
    timeout: 1000,
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
    config.headers.token=localStorage.getItem('token')
}
return config;
}, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
});
// 响应拦截器
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做的
    // 如果后台报错提示一下   ，后台报错和axios 报错  执行的位置不一样
    if(response.data.code!=200){
        Message({
            type: 'error',
            message: response.data.message
        })
        return Promise.reject(response.data) // code不等于200, 页面具体逻辑就不执行了
    }
    return response;
  }, function (error) {
    //axios报错执行这里
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误时做的
    Message({
        type: 'error',
        error
    })
    return Promise.reject(error);
  });
 // 最后导出
  export default service