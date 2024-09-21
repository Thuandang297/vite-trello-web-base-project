import Box from '@mui/material/Box'
function BoardContent() {
  return (
    <Box sx={{
      width:'100%',
      backgroundColor:'primary.main',
      height:theme => `calc(100vh- ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeigth})`
    }}></Box>
  )
}

export default BoardContent
