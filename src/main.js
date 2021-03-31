import Vue from 'vue'
import App from './App.vue'
import VueLogger from 'vuejs-logger'
Vue.config.productionTip = false
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
