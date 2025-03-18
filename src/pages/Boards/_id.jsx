//Boards detail
import Container from '@mui/material/Container'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AppBar from '~/components/AppBar/AppBar'
import {
  fetchBoardDetailsApi
} from '~/redux/activeBoard/activeBoardSlice'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { useParams } from 'react-router-dom'
import { fetchUserDetailsApi } from '~/redux/users/userSlice'
function Board() {
  const dispatch = useDispatch()
  const { boardId } = useParams()

  useEffect(() => {
    // const boardId = '67791259500f2e2c2b7e0ac4'
    dispatch(fetchBoardDetailsApi(boardId))
    // dispatch(fetchUserDetailsApi(null))
  }, [dispatch, boardId])

  return (
    <Container maxWidth='false' disableGutters sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}

export default Board
