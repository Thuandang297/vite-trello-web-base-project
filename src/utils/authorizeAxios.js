/* eslint-disable no-unused-vars */
import axios from 'axios'
import { StatusCodes } from 'http-status-codes'
import { fetchRefreshTokenUserApi } from '~/apis'
import { fetchLogoutUserApi } from '~/redux/users/userSlice'
import { interceptorLoadingElements } from './formatter'
import { setLoadingCircle } from '~/redux/common/commonSlice'
import { useDispatch } from 'react-redux'

let authorizeAxiosInstance = axios.create()
authorizeAxiosInstance.defaults.timeout = 1000 * 60 * 10
authorizeAxiosInstance.defaults.withCredentials = true


//Không thể import store theo cách thông thường trong file js=> Sử dụng inject store
let axiosReduxStore

export const injectStore = mainStore => {
  axiosReduxStore = mainStore
}

// const dispatch = useDispatch()


// axiosInstance.interceptors.request.use(config => {
//   config.headers.authorization = store.getState().auth.token
//   return config
// })

//Can thiệp vào giữa các request nhận vào
authorizeAxiosInstance.interceptors.request.use((config) => {
  const dispatch = useDispatch()
  //Sử dụng kĩ thuật chặn spam click
  interceptorLoadingElements(true)
  dispatch(setLoadingCircle(true))
  //Xử lý khi call api thì mặc định sẽ tạo giao diện loading
  return config
}, (error) => {
  return Promise.reject(error)
})

let requestTokenPromise = null
// Add a response interceptor
// Can thiệp vào giữa các response nhận về
authorizeAxiosInstance.interceptors.response.use((response) => {
  const dispatch = useDispatch()

  //Sử dụng kĩ thuật chặn spam click
  interceptorLoadingElements(false)
  dispatch(setLoadingCircle(false))

  return response
}, (error) => {
  const dispatch = useDispatch()

  let errorMessage = error.message
  if (error?.response?.data?.message) {
    errorMessage = error.response.data.message
  }
  interceptorLoadingElements(false)
  dispatch(setLoadingCircle(false))

  /*Xử lý việc refresh Token tự động
  TH1:Khi mã lỗi 401 thì thực hiện logout luôn
  TH2:Khi mã lỗi là 410 => hết hạn token
  => Gọi api refresh token
  => BE trả về accessToken mới
  => Thực hiện gọi lại request với access token mới vừa truyền vào
  */

  //originalRequests: Chứa những resquest đang bị gọi lỗi khi hết hạn token
  const originalRequests = error.config
  //Trường hợp lỗi trả về là accessToken sai thì mặc định đăng xuất ngay
  if (error?.response?.status == StatusCodes.UNAUTHORIZED) {
    axiosReduxStore.dispatch(fetchLogoutUserApi(false))
  }
  //Trường hợp hết hạn token
  else if (error?.response?.status == StatusCodes.GONE && !originalRequests._retry) {
    originalRequests._retry = true
    //Check xem gọi Promise refreshToken chưa nếu chưa thì gọi luôn các api lỗi vào Promise này, xử lý như này để đảm bảo mỗi khi accessToken hết hạn nhưng gọi nhiều api 1 lúc
    // thì chỉ gọi refreshToken 1 lần duy nhất
    if (!requestTokenPromise) {
      requestTokenPromise = fetchRefreshTokenUserApi()
        .then((data) => {
          //Trả về accessToken sử dụng cho việc gọi lại các api bị lỗi
          return data?.accessToken
        })
        .catch((error) => {
          //Nếu xuất hiện bất cứ lỗi nào xảy ra khi gọi refreshToken thì đăng xuất luôn
          // axiosReduxStore.dispatch(fetchLogoutUserApi(false))
          return Promise.reject(error)
        })
        .finally(() => {
          requestTokenPromise = null
        })
    }
    //B1.Đối với dự án yêu cầu lưu accessToken vào đây thì phải xử lý ở bước này

    //B2.Thực hiện gọi lại các request bị lỗi vì hết hạn token
    return requestTokenPromise.then((accessToken) => {
      return authorizeAxiosInstance(originalRequests)
    })
  }
  return Promise.reject(error)
})

export default authorizeAxiosInstance