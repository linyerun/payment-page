 
import axios from 'axios'
import { ElMessage  } from 'element-plus'

interface IData {
    code: number
    msg: string
    data: any
}
 
export  const request =(options:any)=> {
  return new Promise<IData>((resolve, reject) => {
 
    // create an axios instance
    const service = axios.create({
      // baseURL: process.env.BASE_API
      baseURL: 'http://localhost:8888/company_sales_management_system',
      timeout: 60000 // request timeout
    })
 
    // 请求拦截器
    service.interceptors.request.use(
      (config:any) => {
        //从sessionStorage获取token
        const token =sessionStorage.getItem('token')
        if(token) {
          config.headers['token'] = token
         }
        return config
      },
      error => {
        console.log("出错啦", error) // for debug
        Promise.reject(error)
      }
    )
 
    // 响应拦截器
    service.interceptors.response.use(
       (response:any) => {
        return response.data
      },
      error => {
        console.log('err' + error) // for debug
        if(error.response.status == 403){
          ElMessage.error('错了')
        }else{
          ElMessage.error('服务器请求错误，请稍后再试')
        }
        return Promise.reject(error)
      }
    )
    // 请求处理
    service(options)
      .then((res) => {
        resolve(res as any)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
 
export default request