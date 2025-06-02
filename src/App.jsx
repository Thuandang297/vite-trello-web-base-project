import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

import './App.css'
import Board from '~/pages/Boards/_id'
import NotFound from '~/pages/404/NotFound'
import Auth from '~/pages/Auth/Auth'
import AccountVerification from '~/pages/Auth/AccountVerification'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '~/redux/users/userSlice'
import Settings from './pages/Settings/Setting'
import BooardList from './pages/Boards'

//Xác định các component phải đăng nhập thì mới xem được
const ProtectedRoute = ({ user }) => {
  if (!user) {
    return <Navigate to={'/login'} replace={true} />
  }
  //Sử dụng để cho phép đi qua Route cha để tới Route con
  return <Outlet />
}
function App() {
  const userData = useSelector(selectCurrentUser)
  return (
    <Routes>
      {/* Sử dụng replace={true} để thay thế đường dẫn hiện tại trong history bằng đường dẫn mới */}
      <Route path='/' element={<Navigate to={'/boards'} replace={true} />} />
      {/* Bọc Route này vào để bảo vệ không cho Navigate linh tinh */}
      <Route element={<ProtectedRoute user={userData} />}>
        <Route path='/boards/:boardId' element={<Board />} />
        <Route path='/settings/account' element={<Settings />} />
        <Route path='/settings/sercurity' element={<Settings />} />
        <Route path='/boards' element={<BooardList />} />

      </Route>
      {/* Khi không tìm thấy đường dẫn nào khớp với các Route trên, sẽ hiển thị thông báo 404 Not found */}
      <Route path='*' element={<NotFound />} />

      {/* Authentication */}
      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />
      <Route path='/account/verification' element={<AccountVerification />} />

    </Routes>
  )
}
export default App
