import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loadingCircle: false,
  loadingSkeleton: false
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoadingCircle: (state, action) => {
      state.loadingCircle = action.payload
    },
    setLoadingSkeleton: (state, action) => {
      state.loadingSkeleton = action.payload
    }
  }
})

export const { setLoadingCircle, setLoadingSkeleton } = commonSlice.actions
export const commonReducer = commonSlice.reducer