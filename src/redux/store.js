import { configureStore } from '@reduxjs/toolkit'
import { activeBoardReducer } from './activeBoard/activeBoardSlice'
import { userReducer } from './users/userSlice'
export default configureStore({
  reducer: { activeBoard: activeBoardReducer,
    userReducer: userReducer }

})