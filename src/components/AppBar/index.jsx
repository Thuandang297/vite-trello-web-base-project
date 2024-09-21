import Box from '@mui/material/Box'
import SelectMode from '../ModeSelect'

function AppBar() {
  return (
    <Box sx={{
      width:'100%',
      backgroundColor:'primary.light',
      height:( theme ) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center' }}>
      <SelectMode/>
    </Box>)
}

export default AppBar
