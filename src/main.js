/*
入口js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './filters'

import './mock/MockServer'//加载MockServer即可

//配欸之全局组件插件
Vue.component(Button.name,Button)

new Vue({
  el: '#app',
  render: h => h(App),
  router,//使用路由
  store,//使用vuex
})
