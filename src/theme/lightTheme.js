import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#026AA7'
    },
    background: {
      default: '#ffffff',
      paper: '#f4f5f7'
    },
    text: {
      primary: '#172B4D'
    }
  }
})

export default lightTheme
