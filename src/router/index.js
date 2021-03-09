import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Table from '@/views/Table'
import NewProject from "@/views/NewProject";

Vue.use(VueRouter)

const routes = [
  { path: '/',
    component: Login,
    name: 'login',
    meta: { requiresAuth: false }
  },
  {
    path: '*',
    redirect: '/' },
  {
    path: '/table',
    component: Table,
    name: 'table',
  },
  {
    path: '/new',
    component: NewProject,
    name: 'new',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
