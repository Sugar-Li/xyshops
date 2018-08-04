/*
与后台交互的模块
包含n个接口请求函数的模块
 */

import ajax from './ajax'

//1.获取地理信息（经纬度）
export const reqAddress = (geohash) => ajax(`/api/position/${geohash}`)

//2.获取msite页面食品分类列表
export const reqCategorys = () => ajax(`/api/index_category`)

//3.获取msite商铺列表（根据经纬度）
export const reqShops = ({latitude, longitude}) => ajax('/api/shops',{latitude, longitude})

//4.根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash, keyword) => ajax('/api/search_shops',{geohash, keyword})





//6用户名密码登陆
export const reqPwdLogin = ({name,pwd,captcha}) => ajax('/api/login_pwd',{name,pwd,captcha},'POST')

//7.发送短信验证码
export const reqSendCode = (phone) => ajax('/api/sendcode',{phone},'POST')

//8.手机号验证码登陆
export const reqSmsLogin = (phone,code) => ajax('/api/login_sms',{phone,code},'POST')

// 9.获取用户信息(自动登录)
export const reqUserInfo = () => ajax('/api/userinfo')

//10.用户登出
export const reqLogout = () => ajax('/api/logout')

//11.获取商家商铺数组
export const reqShopGoods = () => ajax('/goods')

//12.获取商家评价数组
export const reqShopRating = () => ajax('/rating')

//13.获取商家信息
export const reqShopInfo = () => ajax('/info')
