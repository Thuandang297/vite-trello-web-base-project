//Boards detail
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
// import { mockData } from '../../apis/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsApi, fetchCreateNewBoardApi, fetchCreateNewColumnApi, fetchCreateNewCardApi } from '~/apis'
import _ from 'lodash'
function Board() {
  const [board, setBoard]=useState()
  useEffect(() => {
    const boardId = '676ee44a628e9cc82c4cfd06'
    fetchBoardDetailsApi(boardId).then(response => setBoard(response))
  }, [])

  const createNewBoardApi = async (newBoard) => {
    const createdBoard = await fetchCreateNewBoardApi(newBoard)
    return createdBoard
  }
  const createNewColumnApi = async (newColumn) => {
    const newReqBody = {
      ...newColumn,
      boardId: board?.dataBoard?._id
    }
    const createdColumn = await fetchCreateNewColumnApi(newReqBody)
    // await fetchBoardDetailsApi(board?.dataBoard?._id).then(response => setBoard(response))

    //Set new item to columnOrderIdS

    const newBoard = _.cloneDeep(board)
    newBoard.dataBoard?.columnOrderIds.push(createdColumn._id)
    newBoard.dataBoard?.columns.push(createdColumn)
    setBoard(newBoard)
    return newBoard
  }

  const createNewCardApi = async (newCard) => {
    const newReqBody = {
      ...newCard,
      boardId: board?.dataBoard?._id
    }
    const createdCard = await fetchCreateNewCardApi(newReqBody)
    // await fetchBoardDetailsApi(board?.dataBoard?._id).then(response => setBoard(response))
    return createdCard
  }

  return (
    <Container maxWidth='false' disableGutters sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
      <AppBar />
      <BoardBar board={board?.dataBoard
      } />
      <BoardContent board={board?.dataBoard
      } createNewBoardApi={createNewBoardApi} createNewColumnApi={createNewColumnApi} createNewCardApi={createNewCardApi} />
    </Container>
  )
}

export default Board
