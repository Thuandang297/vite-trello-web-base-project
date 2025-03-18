import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios'
import authorizeAxiosInstance from '~/utils/authorizeAxios'
import { API_ROOT } from '~/utils/constants'
import { mapOrder } from '~/utils/formatter'
const initialState = {
  currentActiveBoard: ''
}

//Reducer là nơi xử lý các action được gửi từ các component và thay đổi dữ liệu trong store
//Sử dụng extraReducers để xử lý các action được tạo ra từ createAsyncThunk
//Sử dụng createAsyncThunk để tạo ra các action gửi request lên server
//Đây được coi là mid
export const fetchBoardDetailsApi = createAsyncThunk(
  'activeBoard/fetchBoardDetailsApi',
  async (boardId) => {
    const response = await authorizeAxiosInstance.get(`${API_ROOT}/v1/boards/${boardId}`)
    return response.data
  }
)
export const activeBoardSlice = createSlice({
  name: 'activeBoard',
  initialState,
  reducers: {
    updateCurrentActiveBoard: (state, action) => {
      const board = action.payload
      state.currentActiveBoard = board
    }
  },
  //Nơi sử lý dữ liệu trả về từ server sau khi gửi request lên server
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchBoardDetailsApi.fulfilled, (state, action) => {
      //action.payload chính là dữ liệu trả về từ server response.data trả về từ api fetchBoardDetailsApi
      let response = action.payload.dataBoard
      console.log('🚀 ~ builder.addCase ~ response:', response)
      const { cards } = response
      response.columns.forEach(column => {
        const cardsOfEachColumn = cards.filter(card => (card.columnId == column._id))
        const mapOrderedCards = mapOrder(cardsOfEachColumn, column.cardOrderIds, '_id')
        //Map the order by column.cardOrderIds
        column.cards = mapOrderedCards
        return column
      })
      delete response.cards
      state.currentActiveBoard = response
    })
  }
})

// Action là nơi dành cho các component sử dụng dispatch để thay đổi dữ liệu cho reducer
export const { updateCurrentActiveBoard } = activeBoardSlice.actions

//Selector là nơi dành cho các component sử dụng useSelector để lấy dữ liệu từ store
export const selectCurrentActiveBoard = (state) => {
  return state.activeBoard.currentActiveBoard
}

//File này phải export ra reducer để có thể sử dụng trong file store.js
export const activeBoardReducer = activeBoardSlice.reducer