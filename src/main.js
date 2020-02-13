import Vue from 'vue'
import App from './App.vue'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/css/reset.css'
// import env from './env'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL; // 但是缺点是这套只能用到cros和jsonp跨域的时候使用，如果是代理的话，是不行的
axios.interceptors.response.use((response) => {
  let res = response.data;
  if (res.status === 0) {
    return res.data;
  } else if(res.status === 10){
    window.location.href = '/#/login';
    return Promise.reject(res);
  } else {
    Message.warning(res.msg);
    return Promise.reject(res);
  }
}, (error)=>{
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
});



Vue.use(VueAxios, axios)
Vue.prototype.$message = Message;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
