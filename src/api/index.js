/*
与后台交互的模块
包含n个接口请求函数的模块
 */

import ajax from './ajax'

//1.获取地理信息（经纬度）
export const reqAddress=function (geohash) {
  ajax('/api/position/'+geohash)
}

//2.获取msite页面食品分类列表
export const reqCategorys=function () {
  ajax('/api/index_category')
}

//3.获取msite商铺列表（根据经纬度）
export const reqShops=function ({latitude, longitude}) {
  ajax('/api/shops',{latitude, longitude})
}
