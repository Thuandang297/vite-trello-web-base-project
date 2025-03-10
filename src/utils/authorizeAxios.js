import axios from 'axios'
import { toast } from 'react-toastify'
import { interceptorLoadingElements } from './formatter'
let authorizeAxiosInstance = axios.create()

authorizeAxiosInstance.defaults.timeout = 1000 * 60 * 10
authorizeAxiosInstance.defaults.withCredentials = true


//Can thiệp vào giữa các request nhận vào
authorizeAxiosInstance.interceptors.request.use((config) => {
  //Sử dụng kĩ thuật chặn spam click
  interceptorLoadingElements(true)
  return config
}, (error) => {
  return Promise.reject(error)
})

// Add a response interceptor
// Can thiệp vào giữa các response nhận về
authorizeAxiosInstance.interceptors.response.use((response) => {
  //Sử dụng kĩ thuật chặn spam click
  interceptorLoadingElements(false)
  return response
}, (error) => {
  interceptorLoadingElements(false)
  let errorMessage = error.message
  if (error.response.data?.message) {
    errorMessage = error.response.data.message
  }
  if (error.response.status !== 410) {
    toast.error(errorMessage)
  }
  return Promise.reject(error)
})

export default authorizeAxiosInstance