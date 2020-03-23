import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login"
import Home from "../views/Home"
import Country from "../views/Country"
import Report from "../views/Report"

Vue.use(VueRouter)
const beforeEnter = async (to,from ,next)=>{
  if(localStorage.getItem("token")){
    next({path:"/country"})
  }else {
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter
  },
  {
    path: '/country',
    name: 'Country',
    component: Country,
    meta: { requiresAuth: true }
  },
  {
    path: '/report',
    name: 'Report',
    component: Report,
    meta: { requiresAuth: true }
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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = localStorage.getItem("token")
    if (token) {
      next()
    } else {
      next({name:"Login"})
    }
  }
  else {
    next()
  }
})


export default router
