import Vue from 'vue';
import Router from 'vue-router';
import Search from './views/Search.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/',
      name: 'search',
      component: Search,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
