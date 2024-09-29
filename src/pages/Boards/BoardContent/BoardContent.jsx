import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
function BoardContent() {
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'primary.main',
      display: 'flex',
      height: (theme) => `${theme.trello.boardContentHeight}`,
      p: '10px 0'
    }}>
      <ListColumns/>
    </Box>
  )
}

export default BoardContent
