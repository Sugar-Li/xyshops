/*
ajax请求函数模块
返回一个promise对象（异步返回的数据是：response。data）
 */

import  axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {

    // 通过axios发送请求，返回promise对象
    let promise
    if (type === 'GET') {
      //准备 url query 参数数组，就是拼url
      let dataStr = ''//数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        //substring 返回两个参数之间的的字符串，其中第一个所以的值是包括的，最后一个是排除的
        //lastIndexOf搜索最后一个‘&’的index
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送请求
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }


    //根据promise对象获取数据
    promise.then(response => {//成功返回response对象
      //使用成功，调用resolve返回成功对象的数据
      resolve(response.data)
    })
      .catch(err => {//失败返回err对象
        // 使用promise的reject对象返回失败对象
      reject(err)
    })
  })


}
