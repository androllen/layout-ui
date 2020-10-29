import Vue from 'vue'
import App from './App.vue'
import router from './router'
import antdv from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(antdv);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
