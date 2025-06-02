/* eslint-disable no-unused-vars */
import authorizeAxiosInstance from '~/utils/authorizeAxios'

import { API_ROOT } from '~/utils/constants'

const fetchBoardDetailsApi = async (boardId) => {
  const response = await authorizeAxiosInstance.get(`${API_ROOT}/v1/boards/${boardId}`)
  return response.data
}

const fetchCreateNewBoardApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.post(`${API_ROOT}/v1/boards`, reqBody)
  return response.data
}

const fetchUpdateBoardApi = async (reqBody, boardId) => {
  const response = await authorizeAxiosInstance.put(`${API_ROOT}/v1/boards/${boardId}`, reqBody)
  return response.data
}

const fetchGetBoardsApi = async (page, size) => {
  console.log('🚀 ~ fetchGetBoardsApi ~ size:', size)
  const { data } = await authorizeAxiosInstance.get(`${API_ROOT}/v1/boards`, { params: { page, limit: size } })
  data.data.items = data.data.items.map((item, index) => {
    return {
      ...item,
      id: item._id,
      createdAt: new Date(item.createdAt).toLocaleDateString(),
      updatedAt: item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : '',
      index: (page - 1) * size + index + 1,
      key: item._id
    }
  })
  return data
}

export const BoardApi = {
  fetchBoardDetailsApi,
  fetchCreateNewBoardApi,
  fetchUpdateBoardApi,
  fetchGetBoardsApi
}