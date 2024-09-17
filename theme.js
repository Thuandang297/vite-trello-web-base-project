import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: '#333'
        // }
      }
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#fff',
        //   div:'#000'
        // }
      }
    }
  }
})

export default theme
