import Vue from 'vue'
import store from"./store/store"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import App from './App.vue';
import VueLogger from 'vuejs-logger'
import axios from "axios";
// import router from './routers/router.js';
Vue.component(CollapseTransition.name, CollapseTransition)
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
Vue.prototype.axios=axios
new Vue({
  // router,
  store,
  render: h => h(App),
}).$mount('#app')
