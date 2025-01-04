//Boards detail
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
// import { mockData } from '../../apis/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsApi, fetchCreateNewBoardApi, fetchCreateNewColumnApi, fetchCreateNewCardApi } from '~/apis'
import _ from 'lodash'
import { toast } from 'react-toastify'
import { generatePlaceHolderCard } from '~/utils/formatter'
function Board() {
  const [board, setBoard] = useState()
  useEffect(() => {
    const boardId = '67791259500f2e2c2b7e0ac4'
    fetchBoardDetailsApi(boardId)
      .then(response => {
        //Map them placeHolderCard cho nhung column khong chua card trong board
        response.dataBoard.columns.forEach(column => {
          if (_.isEmpty(column.cards)) {
            column.cards = [generatePlaceHolderCard(column)]
            column.cardOrderIds = [generatePlaceHolderCard(column)._id]
          }
        })
        setBoard(response)
      })
      .catch((error) => {
        toast.error(error.message, {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light'
        })
      })
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
    //Khi them moi column thi mac dinh them generatePlaceHolderCard vao cho column
    createdColumn.cards = [generatePlaceHolderCard(createdColumn)]
    createdColumn.cardOrderIds = [generatePlaceHolderCard(createdColumn)._id]
    const newBoard = _.cloneDeep(board)
    newBoard.dataBoard?.columnOrderIds.push(createdColumn._id)
    newBoard.dataBoard?.columns.push(createdColumn)
    setBoard(newBoard)
    return createdColumn
  }

  const createNewCardApi = async (newCard) => {
    const newReqBody = {
      ...newCard,
      boardId: board?.dataBoard?._id
    }
    const { createdCard } = await fetchCreateNewCardApi(newReqBody)
    // Find column have created Card
    const newBoard = _.cloneDeep(board)
    const newColumn = newBoard.dataBoard.columns.find(column => column._id === newCard.columnId)
    newColumn.cards.push(createdCard)
    newColumn.cardOrderIds.push(createdCard._id)
    setBoard(newBoard)
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
