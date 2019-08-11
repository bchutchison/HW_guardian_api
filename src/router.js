import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Films from '@/views/Films';
import Business from '@/views/Business';
import Sport from '@/views/Sport';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: Films
    },
    {
      path: '/business',
      name: 'business',
      component: Business
    },
    {
      path: '/sport',
      name: 'sport',
      component: Sport
    }
  ]
})

export default router;
