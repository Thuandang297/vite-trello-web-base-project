import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/formatter'
function BoardContent(props) {
  const { board } = props
  const ordered = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'primary.main',
      display: 'flex',
      height: (theme) => `${theme.trello.boardContentHeight}`,
      p: '10px 0'
    }}>
      <ListColumns columns={ordered}/>
    </Box>
  )
}

export default BoardContent
