import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsApi = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  return response.data
}

export const fetchCreateNewBoardApi = async (reqBody) => {
  const response = await axios.post(`${API_ROOT}/v1/boards`, reqBody)
  return response.data
}

export const fetchUpdateBoardApi = async (reqBody, boardId) => {
  const response = await axios.put(`${API_ROOT}/v1/boards/${boardId}`, reqBody)
  return response.data
}

export const fetchCreateNewColumnApi = async (reqBody) => {
  const response = await axios.post(`${API_ROOT}/v1/columns`, reqBody)
  return response.data
}

export const fetchCreateNewCardApi = async (reqBody) => {
  const response = await axios.post(`${API_ROOT}/v1/cards`, reqBody)
  return response.data
}

export const fetchUpdateColumnApi = async (reqBody, columnId) => {
  const response = await axios.put(`${API_ROOT}/v1/columns/${columnId}`, reqBody)
  return response.data
}

export const fetchMovingCardsApi = async (reqBody) => {
  const response = await axios.put(`${API_ROOT}/v1/moving-card`, reqBody)
  return response.data
}