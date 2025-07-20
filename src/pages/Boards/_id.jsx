//Boards detail
import Container from '@mui/material/Container'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import AppBar from '~/components/Templates/AppBar/AppBar'
import {
  fetchBoardDetailsApi
} from '~/redux/activeBoard/activeBoardSlice'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
function Board() {
  const dispatch = useDispatch()
  const { boardId } = useParams()

  useEffect(() => {
    dispatch(fetchBoardDetailsApi(boardId))
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
