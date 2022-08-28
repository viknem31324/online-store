import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutComponent from '../components/AboutComponent';
import HomeComponent from '../components/HomeComponent';
import NewsComponent from '../components/NewsComponent';
import ProductComponent from '../components/ProductComponent';
import ShoppingCartComponent from '../components/ShoppingCartComponent';

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
  },
  {
    path: '/shopcart',
    name: 'shopcart',
    component: ShoppingCartComponent,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
