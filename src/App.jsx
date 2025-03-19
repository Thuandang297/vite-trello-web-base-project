import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

import './App.css'
import Board from '~/pages/Boards/_id'
import NotFound from '~/pages/404/NotFound'
import Auth from '~/pages/Auth/Auth'
import AccountVerification from '~/pages/Auth/AccountVerification'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '~/redux/users/userSlice'

//Xác định các component phải đăng nhập thì mới xem được
const ProtectedRoute = ({ user }) => {
  if (!user) {
    <Navigate to={'/login'} replace={true} />
  }
  //Sử dụng để cho phép đi qua Route cha để tới Route con
  return <Outlet/>
}
function App() {
  const userData = useSelector(selectCurrentUser)
  return (
    <Routes>
      {/* Sử dụng replace={true} để thay thế đường dẫn hiện tại trong history bằng đường dẫn mới */}
      <Route path='/' element={<Navigate to={'/boards/67791259500f2e2c2b7e0ac4'} replace={true} />} />
      {/* Bọc Route này vào để bảo vệ không cho Navigate linh tinh */}
      <Route element={<ProtectedRoute user={userData} />}>
        <Route path='/boards/:boardId' element={<Board />} />
      </Route>
      {/* Khi không tìm thấy đường dẫn nào khớp với các Route trên, sẽ hiển thị thông báo 404 Not found */}
      <Route path='*' element={<NotFound />} />

      {/* Authentication */}
      <Route element={<ProtectedRoute user={userData} />}>
        <Route path='/login' element={<Auth />} />
      </Route>
      <Route element={<ProtectedRoute user={userData} />}>
        <Route path='/register' element={<Auth />} />
      </Route>

      <Route path='/account/verification' element={<AccountVerification />} />

    </Routes>
  )
}
export default App
