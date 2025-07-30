import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import authorizeAxiosInstance from '~/utils/authorizeAxios'
import { API_ROOT } from '~/utils/constants'
const initialState = {
  userData: null
}
export const fetchLoginUserApi = createAsyncThunk(
  'user/fetchLoginUserApi',
  async (reqBody) => {
    const response = await authorizeAxiosInstance.put(`${API_ROOT}/v1/users/login`, reqBody)
    return response.data
  }
)

export const fetchLogoutUserApi = createAsyncThunk(
  'user/fetchLogoutUserApi',
  async (successToast = true) => {
    const response = await authorizeAxiosInstance.delete(`${API_ROOT}/v1/users/logout`)
    successToast && toast.success('Logout success')
    return response.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUserApi.fulfilled, (state, action) => {
      let response = action.payload
      state.userData = response
    }),
    //Khi đăng xuất thì xóa redux data của userData đi
    // eslint-disable-next-line no-unused-vars
    builder.addCase(fetchLogoutUserApi.fulfilled, (state, action) => {
      state.userData = null
    })
  }
})

export const selectCurrentUser = (state) => {
  return state.user.userData
}

export const userReducer = userSlice.reducer