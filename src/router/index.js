import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './home';
import cart from './cart';
import category from './category';
import profile from './profile';

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  ...home,
  ...cart,
  ...category,
  ...profile
];
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router;