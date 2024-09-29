import { Tooltip, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Cloud from '@mui/icons-material/Cloud'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddCardIcon from '@mui/icons-material/AddCard'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PeopleIcon from '@mui/icons-material/People'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
function BoardContent() {

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'primary.main',
      display: 'flex',
      height: (theme) => `${theme.trello.boardContentHeight}`,
      p: '10px 0'
    }}>
      {/* List Column */}
      <Box sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'inherit',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden'

      }} >
        {/* Column 1 */}
        <Box sx={{
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
            height: COLUMN_HEADER_HEIGHT,
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
              }} >Column title</Typography>
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
          ${COLUMN_HEADER_HEIGHT} - 
          ${COLUMN_HEADER_HEIGHT})`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da', // Scrollbar thumb color
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              {/* Box media */}
              {/* <CardMedia
              sx={{ height: 140 }}
              title="green iguana"
            /> */}
              {/* Box content */}
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Thuan dev</Typography>
              </CardContent>
              {/* Box footer */}
              <CardActions sx={{ p: '0px 4px 8px 4px' }}>
                <Button startIcon={<PeopleIcon />} size="small">20</Button>
                <Button startIcon={<AttachmentIcon />} size="small">15</Button>
                <Button startIcon={<CommentIcon />} size="small">10</Button>
              </CardActions>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography>Task 2</Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Footer */}
          <Box sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            align: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title='Drag column'>
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
