import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import confirm from '../views/confirm.vue'
import auth from '../views/auth.vue'
import HelloOpenCv from '../components/HelloOpenCv.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (signup.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/signup.vue')
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: confirm
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  },
  {
    path: '/HelloOpenCv',
    name: 'HelloOpenCv',
    component: HelloOpenCv
  }
  //,
  //{
  //  path: '/HelloOpenCv',
  //  name: 'HelloOpenCv',
  //  component: HelloOpenCv
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
