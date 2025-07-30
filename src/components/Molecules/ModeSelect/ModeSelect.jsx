import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import { useColorScheme } from '@mui/material/styles'
function SelectMode() {
  const { mode, setMode } = useColorScheme('')

  const handleChange=(event) => {
    const selected=event.target.value
    setMode(selected)
  }
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ minWidth: 120 }} size="small">
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

export default SelectMode
