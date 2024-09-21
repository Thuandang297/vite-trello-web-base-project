import { useColorScheme } from '@mui/material/styles'
import './App.css'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import Container from '@mui/material/Container'

function SelectMode () {
  const { mode, setMode } = useColorScheme('')

  const handleChange=(event) => {
    const selected=event.target.value
    setMode(selected)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel size='small' id="demo-simple-select-label">Mode</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value={'light'}>
            <Box sx={{ display:'flex', alignItems: 'center', gap:1 }} >
              <LightModeIcon fontSize='small' />Light
            </Box>
          </MenuItem>
          <MenuItem value={'dark'} >
            <Box sx={{ display:'flex', alignItems: 'center', gap:1 }} >
              <DarkModeIcon fontSize='small' />Dark
            </Box>
          </MenuItem>
          <MenuItem value={'system'} >
            <Box sx={{ display:'flex', alignItems: 'center', gap:1 }} >
              <SettingsSuggestIcon fontSize='small' />System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

function App() {
  return (
    <Container maxWidth='false' disableGutters sx={{ height:'100vh', backgroundColor:'primary.main'}}>
      <Box sx={{
        width:'100%',
        backgroundColor:'primary.light',
        height:( theme ) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center' }}>
        <SelectMode/>
      </Box>
      <Box sx={{ width:'100%',
        backgroundColor:'primary.dark',
        height: ( theme ) => theme.trello.boardBarHeigth,
        display: 'flex',
        alignItems: 'center' }}></Box>

      <Box sx={{
        width:'100%',
        backgroundColor:'primary.main',
        height:theme => `calc(100vh- ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeigth})`
      }}></Box>
    </Container>
  )
}

export default App
