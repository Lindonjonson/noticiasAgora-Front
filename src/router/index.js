import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login'
import Guard from '../services/middleware'
import Home from '../views/Home.vue'
import listPosts from '../views/listPosts'
import editPost from '../views/editPost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
 
  },
  {
    path: '/list',
    name: 'listPosts',
    component: listPosts,
    beforeEnter: Guard.auth,
  },
  {
    path: '/editPost',
    name: 'editPost',
    component: editPost,
    beforeEnter: Guard.auth,
  },
  {
    path: '/CadastroNoticias',
    name: 'CadastroNoticias',
    beforeEnter: Guard.auth,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroNoticias.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
