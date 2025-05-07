/* eslint-disable no-unused-vars */
import authorizeAxiosInstance from '~/utils/authorizeAxios'

import { API_ROOT } from '~/utils/constants'

export const fetchBoardDetailsApi = async (boardId) => {
  const response = await authorizeAxiosInstance.get(`${API_ROOT}/v1/boards/${boardId}`)
  return response.data
}

export const fetchCreateNewBoardApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.post(`${API_ROOT}/v1/boards`, reqBody)
  return response.data
}

export const fetchUpdateBoardApi = async (reqBody, boardId) => {
  const response = await authorizeAxiosInstance.put(`${API_ROOT}/v1/boards/${boardId}`, reqBody)
  return response.data
}

export const fetchCreateNewColumnApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.post(`${API_ROOT}/v1/columns`, reqBody)
  return response.data
}

export const fetchCreateNewCardApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.post(`${API_ROOT}/v1/cards`, reqBody)
  return response.data
}

export const fetchUpdateColumnApi = async (reqBody, columnId) => {
  const response = await authorizeAxiosInstance.put(`${API_ROOT}/v1/columns/${columnId}`, reqBody)
  return response.data
}

export const fetchDeleteColumnApi = async (columnId) => {
  const response = await authorizeAxiosInstance.delete(`${API_ROOT}/v1/columns/${columnId}`)
  return response.data
}

export const fetchMovingCardsApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.put(`${API_ROOT}/v1/moving-card`, reqBody)
  return response.data
}

//User api
export const fetchRegisterUserApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.post(`${API_ROOT}/v1/users/register`, reqBody)
  return response.data
}

export const fetchVerifyUserApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.put(`${API_ROOT}/v1/users/verify`, reqBody)
  return response.data
}

export const fetchLoginUserApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.put(`${API_ROOT}/v1/users/login`, reqBody)
  return response.data
}

export const fetchRefreshTokenUserApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.post(`${API_ROOT}/v1/users/refresh-token`)
  return response.data
}

export const fetchChangePasswordUserApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.patch(`${API_ROOT}/v1/users/change-password`, reqBody)
  return response.data
}

export const fetchUpdateUserApi = async (reqBody) => {
  const response = await authorizeAxiosInstance.put(`${API_ROOT}/v1/users/update`, reqBody)
  return response.data

}

