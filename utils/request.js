import axios from 'axios'

const service = axios.create({
  baseURL: process.browser ? 'https://www.codeporter.dev' : 'http://localhost:5000',
  timeout: 10000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
