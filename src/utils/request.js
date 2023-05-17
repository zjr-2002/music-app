//封装网络请求方法
//便于修改，便于更换

import axios from 'axios'
const ajax = axios.create({  //自定义axios对象 （ajax就是axios）
  baseURL:'http://localhost:3000' //本地服务器基地
  // baseURL:'http://139.9.62.37:3000' //上线服务器基地
})
export default ajax; 



