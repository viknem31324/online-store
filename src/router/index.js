import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutComponent from '../components/AboutComponent';
import HomeComponent from '../components/HomeComponent';
import NewsComponent from '../components/NewsComponent';
import ProductComponent from '../components/ProductComponent';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsComponent,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutComponent,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductComponent,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
