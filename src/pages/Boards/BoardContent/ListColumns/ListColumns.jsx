import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { Close } from '@mui/icons-material'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { toast } from 'react-toastify'
import Column from './Column/Column'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentActiveBoard, updateCurrentActiveBoard } from '~/redux/activeBoard/activeBoardSlice'
import { fetchCreateNewColumnApi } from '~/apis'
import { generatePlaceHolderCard } from '~/utils/formatter'
import { cloneDeep } from 'lodash'
function ListColumns({ columns }) {
  const dispatch = useDispatch()
  //get data board from store
  const board = useSelector(selectCurrentActiveBoard)

  const [openCreateColumn, setOpenCreateColumn] = useState(false)
  const [newColumnTitle, setNewColumnTitle] = useState('')
  const toogleOpenCreateColumn = () => setOpenCreateColumn(!openCreateColumn)

  const addNewColumn = async () => {
    if (!newColumnTitle) {
      return toast.error('It is empty column title!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
    }
    const newReqBody = {
      title: newColumnTitle,
      boardId: board._id
    }
    await fetchCreateNewColumnApi(newReqBody)
      .then(createdColumn => {
        //Khi them moi column thi mac dinh them generatePlaceHolderCard vao cho column
        createdColumn.cards = [generatePlaceHolderCard(createdColumn)]
        createdColumn.cardOrderIds = [generatePlaceHolderCard(createdColumn)._id]
        const newBoard = cloneDeep(board)
        newBoard.columnOrderIds.push(createdColumn._id)
        newBoard.columns.push(createdColumn)
        const boardData = cloneDeep(newBoard)
        dispatch(updateCurrentActiveBoard(boardData))

        //Reset input
        setNewColumnTitle('')
        setOpenCreateColumn(false)

        //Show toast
        return toast.success('Create column success!', {
          position: 'bottom-left',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light'
        })
      })
      .catch(err => {
        return toast.error(err.response.data.message, {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light'
        })
      })
  }

  return (
    <SortableContext items={columns?.map((column => column._id))} strategy={horizontalListSortingStrategy}>
      {/* List Column */}
      <Box sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'inherit',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden'
      }} >
        {columns?.map(column => (
          < Column key={column?._id} column={column} />
        ))}
        {openCreateColumn ?
          <Box sx={{
            minWidth: '200px',
            maxWidth: '200px',
            margin: 1,
            borderRadius: '6px',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
            height: 'fit-content',
            // bgcolor: '#ffffff3d'
          }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
                <TextField
                  label="Enter to add column title..."
                  size='small'
                  type="text"
                  variant='outlined'
                  sx={{
                    '& label': { color: 'white' },
                    '& input': { color: 'white' },
                    '& label.Mui-focused': { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'white' },
                      '&:hover fieldset': { borderColor: 'white' },
                      '&.Mui-focused fieldset': { borderColor: 'white' }
                    }
                  }}
                  value={newColumnTitle}
                  onChange={(e) => { setNewColumnTitle(e.target.value) }}
                  autoFocus
                />

              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, margin: 1 }}>
                <Button
                  variant='contained'
                  color='success'
                  size='small'
                  fontSize='small'
                  sx={{
                    boxShadow: 'none',
                    border: '0.5px solid',
                    borderColor: (theme) => theme.palette.success.main,
                    '&:hover': {
                      bgcolor: (theme) => theme.palette.success.main
                    }
                  }}
                  className={'interceptor-loading'}
                  onClick={addNewColumn}
                >
                  Add column
                </Button>
                <Close
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    '&:hover': {
                      color: (theme) => theme.palette.warning.light
                    }
                  }}
                  fontSize='small'
                  onClick={toogleOpenCreateColumn}
                />
              </Box>
            </Box>
          </Box> :
          <Box sx={{
            minWidth: '200px',
            maxWidth: '200px',
            margin: 1,
            borderRadius: '6px',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
            height: 'fit-content',
            bgcolor: '#ffffff3d'
          }}>
            <Box>
              <Button
                sx={{
                  color: 'white',
                  width: '100%',
                  justifyContent: 'flex-start',
                  pl: 2.5,
                  pi: 1
                }}
                onClick={toogleOpenCreateColumn}
                startIcon={<NoteAddIcon />}> Add new column</Button>
            </Box>
          </Box>
        }


      </Box>
    </SortableContext>

  )
}

export default ListColumns
