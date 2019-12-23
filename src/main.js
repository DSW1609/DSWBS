import Vue from 'vue'
import App from './App.vue'
import router from './router'
import animate from "animate.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  animate
}).$mount('#app')