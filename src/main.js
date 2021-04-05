import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueLogger from 'vuejs-logger'
import axios from "axios";
Vue.prototype.axios=axios
Vue.config.productionTip = false
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
Vue.$log.debug('Plugin:', 'VueLogger init ...')

new Vue({
  render: h => h(App),
}).$mount('#app')
