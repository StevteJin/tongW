import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 300 * 1000 // 请求超时时间
})
// 添加请求拦截器)
service.interceptors.request.use(
  config => {
    // 给请求加上请求头
    if(sessionStorage.token && sessionStorage.token !== 'undefined') {
      config.headers.Authorization = sessionStorage.token
    }
    // 在发送请求之前做某件事，譬如这里可以把参数序列化
    if (config.method === 'post') { 
      // config.data = qs.stringify(config.data);
    }
    return config
  },
  error => {
    console.log('错误的传参')
    // Do something with request error
    return Promise.reject(error)
  }
)
// respone拦截器，返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  response => {
    return response.data;
    // if(response.data.msg !== "success"){
    //   if(response.data.data){
    //     message.error(response.data.data) 
    //   }else if(response.data.msg){
    //     message.error(response.data.msg);
    //   }else{
    //     message.error('接口异常');
    //   }
    //   return '';
    // }else{
    //   return response.data;
    // }
  },
  error => {
   // message.error("接口未知错误 请联系张源");
    // if (error.response.status === 504 || error.response.status === 404) {
    //     message.error('"服务器失去响应！');
    // } else if (error.response.status === 401) {
    //     message.error("登录信息已经失效！");
    // } else if (error.response.status === 500) {
    //     message.error("服务器不可用！");
    // }else {
    //   message.error("接口位置错误");
    // }
    return Promise.reject(error)
  }
)
export default service;