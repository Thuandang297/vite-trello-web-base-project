import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const theme = extendTheme({
  trello:{
    appBarHeight: '48px',
    boardBarHeigth: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#03a9f4',
          light:'#fff',
          dark:'#333'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#111'
        }
      }
    }
  }
})

export default theme
