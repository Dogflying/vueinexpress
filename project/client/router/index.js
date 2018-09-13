import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tools from '@/components/Tools'
import TranslateTool from '@/components/TranslateTool'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Course from '@/components/Course'
import Render from '@/components/render'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/tools',
    name: 'Tools',
    component: Tools
  }, {
    path: '/tools/translatetool',
    name: 'TranslateTool',
    component: TranslateTool
  }, {
    path: '/login/:type',
    name: 'Login',
    component: Login
  }, {
    path: '/course',
    name: 'Course',
    component: Course
  }, {
    path: '/render',
    name: 'render',
    component: Render
  }, {
    path: '/count',
    name: 'count',
    component: Count
  }]
})
