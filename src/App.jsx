
import './App.css'
// import Board from '~/pages/Boards/_id'
import { Box } from '@mui/material'
import { Suspense } from 'react'
import Sidebar from './components/Organisms/SideBar'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Suspense fallback={<div>Loading element...</div>} >
      <Box sx={{ display: 'flex' }}>
        {/* <AppBar /> */}
        <Sidebar />
        <AppRoutes />
      </Box>
    </Suspense>
  )
}
export default App
