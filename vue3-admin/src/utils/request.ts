import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 60000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default service
