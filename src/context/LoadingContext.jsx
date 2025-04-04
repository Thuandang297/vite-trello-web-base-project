import { createContext, useContext, useState } from 'react'

// Tạo Context
const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  // Hàm bật/tắt loading
  const showLoading = () => setLoading(true)
  const hideLoading = () => setLoading(false)

  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

// Custom hook để sử dụng LoadingContext
export const useLoading = () => useContext(LoadingContext)
// export default LoadingContext
