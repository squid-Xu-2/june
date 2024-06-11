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
    const result = response.data
    if (result.code === 200) {
      return result
    }

    return Promise.reject(result.msg)
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default service
