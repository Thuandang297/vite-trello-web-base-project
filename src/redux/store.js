import { configureStore } from '@reduxjs/toolkit'
import { activeBoardReducer } from './activeBoard/activeBoardSlice'
export default configureStore({
  reducer: { activeBoard: activeBoardReducer }
})