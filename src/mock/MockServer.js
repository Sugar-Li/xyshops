/*
使用mockjs提供mock接口
 */

import Mock from 'mockjs'
import data from './data.json'

//返回goods接口
Mock.mock('/goods',{code:0,data:data.goods})
//返回info接口
Mock.mock('/info',{code:0,data:data.info})

//返回rating接口
Mock.mock('/rating',{code:0,data:data.rating})

//exports default xxx   ??   不需要向外暴露任何数据，只要保证执行
