import Vue from 'vue'
import moment from 'moment'

//自定义过滤器
Vue.filter('data-filter',function (val) {
  return moment(val).format('YYYY-MM-DD HH:mm:ss')
})
