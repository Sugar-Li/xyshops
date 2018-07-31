/*
路由器模块
 */

import Vue from 'vue'
import VueRouter from  'vue-router'
//插如路由
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'

//声明使用路由
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes:[
    {
      path:'/msite',
      component:Msite
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/profile',
      component:Profile
    },
    {//默认显示/msite
      path:'/',
      redirect:'/msite'
    },
  ]
})
