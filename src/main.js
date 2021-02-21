import Vue from 'vue'
import App from './App.vue'
import Animation from './directives/animation'
import i18n from './i18n'

Vue.directive('animation', Animation);
Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
