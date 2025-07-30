import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#172B4D'
    },
    background: {
      default: '#0D1117',
      paper: '#1C1F26'
    },
    text: {
      primary: '#E1E4E8'
    }
  }
})

export default darkTheme
