import { configureStore } from '@reduxjs/toolkit'
import { activeBoardReducer } from './activeBoard/activeBoardSlice'
import { userReducer } from './users/userSlice'

// Cấu hình redux persist
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // Mặc định là localStorage

// Cấu hình whitelist và blacklist
const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'], // Chỉ lưu state của user
  blacklist: ['activeBoard'] // Không lưu activeBoard vào persist
}

// Gộp reducers
const reducers = combineReducers({
  activeBoard: activeBoardReducer,
  user: userReducer
})

const persistedReducer = persistReducer(rootPersistConfig, reducers)


// ✅ Thêm cấu hình middleware để bỏ qua lỗi non-serializable
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
      }
    })
})
