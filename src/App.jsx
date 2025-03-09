import { Route, Routes, Navigate } from 'react-router-dom'

import './App.css'
import Board from '~/pages/Boards/_id'
import NotFound from '~/pages/404/NotFound'
import Auth from '~/pages/Auth/Auth'
function App() {
  return (
    <Routes>
      {/* Sử dụng replace={true} để thay thế đường dẫn hiện tại trong history bằng đường dẫn mới */}
      <Route path='/' element={<Navigate to={'/boards/67791259500f2e2c2b7e0ac4'} replace={true} />} />
      <Route path='/boards/:boardId' element={<Board />} />

      {/* Khi không tìm thấy đường dẫn nào khớp với các Route trên, sẽ hiển thị thông báo 404 Not found */}
      <Route path='*' element={<NotFound />} />

      {/* Authentication */}
      <Route path='/login' element={<Auth />} />
      <Route path='/register' element={<Auth />} />
    </Routes>
  )
}
export default App
