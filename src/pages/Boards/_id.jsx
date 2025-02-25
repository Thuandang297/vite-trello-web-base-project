//Boards detail
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
// import { mockData } from '../../apis/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsApi, fetchCreateNewBoardApi, fetchCreateNewColumnApi, fetchCreateNewCardApi, fetchUpdateBoardApi, fetchUpdateColumnApi, fetchMovingCardsApi } from '~/apis'
import _ from 'lodash'
import { toast } from 'react-toastify'
import { generatePlaceHolderCard, mapOrder } from '~/utils/formatter'
function Board() {
  const [board, setBoard] = useState()
  useEffect(() => {
    const boardId = '67791259500f2e2c2b7e0ac4'
    fetchBoardDetailsApi(boardId)
      .then(response => {
        const { cards } = response.dataBoard
        response.dataBoard.columns.forEach(column => {
          const cardsOfEachColumn = cards.filter(card => (card.columnId == column._id))
          const mapOrderedCards = mapOrder(cardsOfEachColumn, column.cardOrderIds, '_id')
          //Map the order by column.cardOrderIds
          column.cards = mapOrderedCards
          return column
        })
        delete response.dataBoard.cards
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

  const getDetailBoard = () => {
    const boardId = '67791259500f2e2c2b7e0ac4'
    fetchBoardDetailsApi(boardId)
      .then(response => {
        const { cards } = response.dataBoard
        response.dataBoard.columns.forEach(column => {
          const cardsOfEachColumn = cards.filter(card => (card.columnId == column._id))
          const mapOrderedCards = mapOrder(cardsOfEachColumn, column.cardOrderIds, '_id')
          //Map the order by column.cardOrderIds
          column.cards = mapOrderedCards
          return column
        })
        delete response.dataBoard.cards
        setBoard(response)
      })
  }

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

  const handlerUpdateOrderedColumn = async (orderedColumnIds) => {
    const boardId = board?.dataBoard._id
    const updatedBoard = {
      title: board?.dataBoard.title,
      description: board?.dataBoard.description,
      type: board?.dataBoard.type,
      columnOrderIds: [...orderedColumnIds]
    }
    await fetchUpdateBoardApi(updatedBoard, boardId).then(() => {
      return toast.success('Success', {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
    }).catch(error => {
      return toast.error(error.message, {
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
    })
  }

  const handleMoveCardInColumn = async (data) => {
    const updatedColumn = {
      boardId: board?.dataBoard._id,
      cardOrderIds: data.cardOrderIds,
      cards: data?.cards
    }
    await fetchUpdateColumnApi(updatedColumn, data.columnId).then(() => {
      return toast.success('Move card in column success!', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: 'light'
      })
    })
  }

  const handleMoveCardOutColumn = async (data) => {
    await fetchMovingCardsApi(data).then(() => {
      return toast.success('Move card into a new column success!', {
        position: 'bottom-left',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        theme: 'light'
      })
    })
  }

  return (
    <Container maxWidth='false' disableGutters sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
      <AppBar />
      <BoardBar board={board?.dataBoard
      } />
      <BoardContent board={board?.dataBoard
      } createNewBoardApi={createNewBoardApi} createNewColumnApi={createNewColumnApi} createNewCardApi={createNewCardApi} onUpdateOrderedColumn={handlerUpdateOrderedColumn}
      onMoveCardInColumn={handleMoveCardInColumn} onMoveCardOutColumn={handleMoveCardOutColumn} onGetDetailBoard={getDetailBoard}/>
    </Container>
  )
}

export default Board
