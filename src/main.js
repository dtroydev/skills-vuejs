import Vue from 'vue';
import VeeValidate from 'vee-validate';
// import BootstrapVue from 'bootstrap-vue';
import router from './router';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VeeValidate);
// Vue.use(BootstrapVue);

new Vue({ router, render: h => h(App) }).$mount('#app');
