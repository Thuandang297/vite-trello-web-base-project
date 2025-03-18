import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authorizeAxiosInstance from '~/utils/authorizeAxios'
import { API_ROOT } from '~/utils/constants'
const initialState = {
  activeUser: null
}
export const fetchUserDetailsApi = createAsyncThunk(
  'currentUser/fetchUserDetailsApi',
  async (userId) => {
    const response = await authorizeAxiosInstance.get(`${API_ROOT}/v1/users/${userId}`)
    return response.data
  }
)

export const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserDetailsApi.fulfilled, (state, action) => {
      let response = action.payload?.dataUser
      state.activeUser = response
    })
  }
})

export const selectCurrentActiveUser = (state) => {
  return state.activeUser.activeUser
}

export const userReducer = userSlice.reducer