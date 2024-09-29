import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards() {
  return (
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
      <Card tempotaryHideMedia ={true}/>
      <Card />
    </Box>
  )
}

export default ListCards
