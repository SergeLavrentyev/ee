import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Cart from '../views/Cart.vue'
import Catalog from '../views/Catalog.vue'
import Login from '../views/Login.vue'
<<<<<<< HEAD
import Registration from '../views/Registration.vue'
=======
import Register from '../views/Registration.vue'
>>>>>>> fff940c1d648f7395ae2d184142d10c8db20926d
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
<<<<<<< HEAD
    name: 'register',
    component: Registration
=======
    name: 'Register',
    component: Register
>>>>>>> fff940c1d648f7395ae2d184142d10c8db20926d
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
