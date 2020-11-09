import http from '../utils/http'
// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
// let resquest = "/testIp/request/"
let resquest = "/api/"
let toResquest = ""

// get请求
export async function getListAPI(url, params) {
    try {
      toResquest = resquest+url
      let res = {}
      res = await http.get(`${toResquest}`,params)
      return new Promise((resolve, reject) => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res.message)
        }
      }).catch(err => {
        console.log('ERROR: ' + err)
      })
    } catch (err) {
      console.log('ERROR: ' + err)
    }
    // toResquest = resquest+url
    // return http.get(`${toResquest}`,params)
}
// post请求
export async function postListAPI(url, params) {
  try {
      toResquest = resquest+url
      let res = {}
      res = await http.post(`${toResquest}`, params)
      return new Promise((resolve, reject) => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res.message)
        }
      }).catch(err => {
        console.log('ERROR: ' + err)
      })
    } catch (err) {
      console.log('ERROR: ' + err)
    }
    // return http.post(`${resquest}/postForm.json`,params)
}
// put 请求
export async function putListAPI(url, params) {
  try {
      toResquest = resquest+url
      let res = {}
      res = await http.put(`${toResquest}`,params)
      return new Promise((resolve, reject) => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res.message)
        }
      }).catch(err => {
        console.log('ERROR: ' + err)
      })
    } catch (err) {
      console.log('ERROR: ' + err)
    }
    // return http.put(`${resquest}/putSome.json`,params)
}
// delete 请求
export async function deleteListAPI(url, params) {
  try {
      toResquest = resquest+url
      let res = {}
      res = await http.delete(`${toResquest}`,params)
      return new Promise((resolve, reject) => {
        if (res.status === 200) {
          resolve(res.data)
        } else {
          reject(res.message)
        }
      }).catch(err => {
        console.log('ERROR: ' + err)
      })
    } catch (err) {
      console.log('ERROR: ' + err)
    }
    // return http.delete(`${resquest}/deleteList.json`,params)
}