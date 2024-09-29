//Boards detail
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
function Board() {
  return (
    <Container maxWidth='false' disableGutters sx={{ height:'100vh', backgroundColor:'primary.main' }}>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </Container>
  )
}

export default Board
