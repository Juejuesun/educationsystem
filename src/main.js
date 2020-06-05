import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import VueSocketIo from 'vue-socket.io'
import SocketIO from "socket.io-client"
import axios from 'axios'

// 导入全局样式
import './assets/global.css'

// Vue.config.productionTip = false
Vue.config.productionTip = true

axios.defaults.baseURL = 'http://localhost:81'//测试用
Vue.prototype.$http = axios

Vue.use(new VueSocketIo({
  debug: false,
  // debug: true,
  // connection: SocketIO('http://localhost:8081'),//测试接口
  connection: SocketIO('http://39.97.119.247:8081'),
  vuex: {
    store,
    mutationPrefix: "SOCKET_",
    actionPrefix: "SOCKET_"

  }
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
