/*
通过mutation间接更新state的对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATING,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CARTS,
  RECEIVE_SEARCHSHOPS

} from './mutations-types'

import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRating,
  reqShopInfo,
  reqSearchShops
} from '../api'

export default {
//异步获取地址
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if (result.code === 0) {//成功
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

//异步获取地食品分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    //提交一个mutation
    if (result.code === 0) {//成功
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

//异步获取商家列表
  async getShops({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    //提交一个mutation
    if (result.code === 0) {//成功
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  //同步记录用户信息（异步操作已经在当前页面中进行）
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  //异步获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {//成功
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  //异步登出
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {//成功
      commit(RESET_USER_INFO)
    }
  },

  //异步获取商品数组
  async getShopGoods({commit}) {
    const result = await reqShopGoods()
    if (result.code === 0) {//成功
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },

  //异步获取评价数组
  async getShopRating({commit},callback) {
    const result = await reqShopRating()
    if (result.code === 0) {//成功
      const ratings = result.data
      commit(RECEIVE_RATING, {ratings})
      //数据更新了，通知一下组件
      if (callback){
        callback()
      }
    }
  },

  //异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {//成功
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },

  //同步更新食品数量
  updateFoodCount({commit}, {isAdd, food}) {
    if (isAdd) {
      commit(INCREMENT_FOOD_COUNT,{food})
    }else {
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },

  //同步移除购物车
  clearCarts({commit}){
    commit(CLEAR_CARTS)
  },

  //异步获取搜索商家列表
  async searchShops({commit, state},keyword) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShops(geohash, keyword)
    //提交一个mutation
    if (result.code === 0) {//成功
      const searchShops = result.data
      commit(RECEIVE_SHOPS, {searchShops})
    }
  },

}
