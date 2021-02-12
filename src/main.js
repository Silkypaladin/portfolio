import Vue from 'vue'
import App from './App.vue'
import Animation from './directives/animation'

Vue.directive('animation', Animation);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
