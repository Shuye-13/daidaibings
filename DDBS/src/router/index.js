import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import Order_form from '../views/Order_form.vue'
import Registersmall from '../views/Registersmall.vue'
import Login from '../views/Login.vue'
import Resetpass from '../views/Resetpass.vue'
import Payment from '../views/Payment.vue'
import Trip from '../views/Trip.vue'
import Register from '../views/Register.vue'
import Order from '../views/Order.vue'
import Index_address from '../views/Index_address.vue'
import Details from '../views/Details.vue'
import Select from '../views/Select.vue'
import Homeinns from '../views/Homeinns.vue'
import Roomlist from '../views/Roomlist.vue'
import Time from '../views/Time.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/time',
    name: 'Time',
    component: Time
  },
  {
    path: '/roomlist',
    name: 'Roomlist',
    component: Roomlist
  },
  {
    path: '/homeinns',
    name: 'Homeinns',
    component: Homeinns
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/index_address',
    name: 'Index_address',
    component: Index_address
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/trip',
    name: 'Trip',
    component: Trip
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/resetpass',
    name: 'Resetpass',
    component: Resetpass
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registersmall',
    name: 'Registersmall',
    component: Registersmall
  },
  {
    path: '/order_form',
    name: 'Order_form',
    component: Order_form
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
