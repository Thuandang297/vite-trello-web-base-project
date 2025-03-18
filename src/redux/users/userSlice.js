import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authorizeAxiosInstance from '~/utils/authorizeAxios'
import { API_ROOT } from '~/utils/constants'
const initialState = {
  activeUser: null
}
export const fetchLoginUserApi = createAsyncThunk(
  'user/fetchLoginUserApi',
  async (reqBody) => {
    const response = await authorizeAxiosInstance.put(`${API_ROOT}/v1/users/login`, reqBody)
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
      state.activeUser = response
    })
  }
})

export const selectCurrentUser = (state) => {
  return state.userReducer.activeUser
}

export const userReducer = userSlice.reducer