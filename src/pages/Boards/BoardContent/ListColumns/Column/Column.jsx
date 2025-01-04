import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Close as CloseIcon } from '@mui/icons-material'
import AddCardIcon from '@mui/icons-material/AddCard'
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Tooltip, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { toast } from 'react-toastify'
import ListCards from './ListCards/ListCards'
const Column = (props) => {
  const { column, createNewCardApi } = props
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column?._id,
    data: { ...column }
  })

  const dndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    height:'100%',
    opacity:isDragging ? 0.5:undefined
  }

  const [openCreateCard, setOpenCreateCard] = useState(false)
  const [newCardTitle, setNewCardTitle] = useState('')
  const toogleOpenCreateCard = () => setOpenCreateCard(!openCreateCard)

  const addNewCard = async () => {
    if (!newCardTitle) {
      return toast.error('Emty card title!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
    }
    const newCardData = {
      title: newCardTitle,
      columnId: column?._id
    }
    await createNewCardApi(newCardData).then((response) => {
      if (!response) return
      toast.success('Creat column success!', {
        position: 'bottom-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light'
      })
    })
      .catch(() => {
        toast.error('Fail to create a column!', {
          position: 'bottom-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'light'
        })
      })
    toogleOpenCreateCard()
    setNewCardTitle('')
  }
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  // const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
  return (
    <>
      {/* Column*/}
      <div ref={setNodeRef}
        style={dndKitColumnStyles}
        {...attributes}
      >
        <Box
          {...listeners}
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode == 'dark' ? '#6c6c6c' : '#ebecf0'),
            margin: 1,
            borderRadius: '6px',
            maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
            height: 'fit-content'
          }}>
          {/* Header title column */}
          <Box sx={{
            height: (theme) => (theme.trello.columnHeaderHeight),
            p: 2,
            display: 'flex',
            align: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 'bold',
                fontSize: '1rem',
                cursor: 'pointer'
              }} >{column.title}</Typography>
            {/* Box have the expand */}
            <Box>
              <Tooltip title='Click to expand'>
                <ExpandMoreIcon
                  id="board_content_expand"
                  aria-controls={open ? 'board_content_menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ cursor: 'pointer' }} />
              </Tooltip>
              <Menu
                id="board_content_menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'board_content_expand'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card </ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteForeverIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>

            </Box>
          </Box>
          {/* Content list card */}
          <Box sx={{
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            p: '0 5px',
            overflowX: 'hidden',
            overflowY: 'auto',
            // maxHeight: (theme) => (`calc( ${theme.trello.boardContentHeight} - 300px)`)
            maxHeight: (theme) => `calc(
          ${theme.trello.boardContentHeight} - 
          ${theme.spacing(5)} - 
          ${theme.trello.columnHeaderHeight} - 
          ${theme.trello.columnFooterHeight})`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da', // Scrollbar thumb color
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}>
            <ListCards cards={column.cards} />
          </Box>
          {/* Footer */}
          <Box sx={{
            height: (theme) => (theme.trello.columnFooterHeight),
            p: 2
          }}>
            {!openCreateCard ?
              <Box sx={{
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                height:'100%',
                width:'100%',
                gap:1
              }}>
                <Button
                  startIcon={<AddCardIcon />}
                  onClick={toogleOpenCreateCard}
                >Add new card</Button>
                <Tooltip title='Drag column'>
                  <DragHandleIcon sx={{ cursor: 'pointer' }} />
                </Tooltip>
              </Box>
              :
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '100%',
                  width:'100%',
                  gap: 1
                }}
              >
                <Box
                  data-no-dnd="true"
                  sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
                  <TextField
                    label="Enter to add card title..."
                    size='small'
                    type="text"
                    variant='outlined'
                    data-no-dnd="true"
                    sx={{
                      '& label': { color: 'text.primary' },
                      '& input': {
                        color: (theme) => theme.palette.primary.main,
                        bgcolor: (theme) => theme.palette.mode == 'dark' ? '#333643' : 'white'
                      },
                      '& label.Mui-focused': { color: (theme) => theme.palette.primary.main },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: (theme) => theme.palette.primary.main },
                        '&:hover fieldset': { borderColor: (theme) => theme.palette.primary.main },
                        '&.Mui-focused fieldset': { borderColor: (theme) => theme.palette.primary.main }
                      },
                      '& .MuiOutLinedInput-input': { borderRadius: 1 }
                    }}
                    value={newCardTitle}
                    onChange={(e) => { setNewCardTitle(e.target.value) }}
                    autoFocus
                  />

                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, margin: 1 }}>
                  <Button
                    variant='contained'
                    color='success'
                    size='small'
                    fontSize='small'
                    data-no-dnd="true"
                    sx={{
                      boxShadow: 'none',
                      border: '0.5px solid',
                      borderColor: (theme) => theme.palette.success.main,
                      '&:hover': {
                        bgcolor: (theme) => theme.palette.success.main
                      }
                    }}
                    onClick={addNewCard}
                  >
                    Add
                  </Button>
                  <CloseIcon
                    sx={{
                      color: (theme) => theme.palette.error.main,
                      cursor: 'pointer',
                      '&:hover': {
                        color: (theme) => theme.palette.warning.light
                      }
                    }}
                    fontSize='small'
                    onClick={toogleOpenCreateCard}
                  />
                </Box>
              </Box>
            }
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Column
