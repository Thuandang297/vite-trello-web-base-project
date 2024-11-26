//Boards detail
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '../../apis/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsApi } from '~/apis'
function Board() {
  const [board, setBoard]=useState()

  useEffect(() => {
    const boardId = '673d79d8596a941c8f7de8e8'
    fetchBoardDetailsApi(boardId).then(response => setBoard(response))
  }, [])
  return (
    <Container maxWidth='false' disableGutters sx={{ height:'100vh', backgroundColor:'primary.main' }}>
      <AppBar/>
      <BoardBar board={board?.dataBoard
}/>
      <BoardContent board={board?.dataBoard
} />
    </Container>
  )
}

export default Board
