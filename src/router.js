import Vue from 'vue';
import Router from 'vue-router';
import Skills from './components/Skills.vue';
import About from './components/About.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history', // get rid of the hash in the url
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills,
    }, {
      path: '/about/:name',
      name: 'About',
      component: About,
    },
  ],
});
