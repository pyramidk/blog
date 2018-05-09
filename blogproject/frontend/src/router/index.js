import Vue from 'vue'
import Router from 'vue-router'
import BlogVideo from '@/components/blog/BlogVideo'
import Blog from '@/components/blog/Blog'
import BlogDetail from '@/components/blog/BlogDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BlogVideo',
      component: BlogVideo
    },
    {
      path: '/home',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/detail/:id',
      name: 'BlogDetail',
      component: BlogDetail
    }
  ]
})
