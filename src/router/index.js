import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Search from '@/views/Search'
import play from '@/views/Play'
import Comment from '@/views/Comment'
import SongSheet from '@/views/SongSheet'

const routes = [
  
  {
    path:'/',
    redirect:'layout'
  },

  {
    path:'/layout',
    component:Layout,
    redirect:'layout/Home',
    children:[
      {
        path:'Home',
        component:Home,
        meta:{title:'首页',active:0},
      },
      {
        path:'Search',
        component:Search,
        meta:{title:'搜索',active:1}
      }
    ]
  },


  {
    path:'/play',
    component:play
  },

  {
    path:'/Comment',
    component:Comment
  },

  {
    path:'/SongSheet',
    component:SongSheet,
  }
]

const router = new VueRouter({
  // 默认是hash模式
  // history模式下刷新会报错，一般配合后端来解决
  mode: 'hash',
  routes
})

export default router
