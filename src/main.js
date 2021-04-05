import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueLogger from 'vuejs-logger'
import axios from "axios";
import router from './routers/router.js';
Vue.prototype.axios=axios
Vue.use(ElementUI);
Vue.use(VueLogger, {
  logLevel: 'debug',
  separator: '|',
  isEnabled: true,
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  showConsoleColors: true
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
