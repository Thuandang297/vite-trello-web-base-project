import Box from '@mui/material/Box'
function BoardBar() {
  return (
    <Box sx={{ width:'100%',
      backgroundColor:'primary.dark',
      height: ( theme ) => theme.trello.boardBarHeigth,
      display: 'flex',
      alignItems: 'center' }}></Box>
  )
}

export default BoardBar
