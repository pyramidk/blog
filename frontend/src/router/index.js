import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/blog/BlogHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogHome',
      component: BlogHome
    }
  ]
})
