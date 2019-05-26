import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "news" */ './views/News.vue')
    },
    {
      path: '/initiatives',
      name: 'initiatives',
      component: () => import(/* webpackChunkName: "initiatives" */ './views/Initiatives.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "users" */ './views/Users.vue')
    },
    {
      path: '/helpme',
      name: 'helpme',
      component: () => import(/* webpackChunkName: "helpme" */ './views/HelpMe.vue')
    },
    {
      path: '/places',
      name: 'places',
      component: () => import(/* webpackChunkName: "places" */ './views/Places.vue')
    },
    {
      path: '/survey',
      name: 'survey',
      component: () => import(/* webpackChunkName: "survey" */ './views/Survey.vue')
    },
  ]
})
