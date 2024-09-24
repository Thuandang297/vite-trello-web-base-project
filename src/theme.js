import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

export const theme = extendTheme({
  trello:{
    appBarHeight: '58px',
    boardBarHeigth: '60px'
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
          main: '#086b58',
          light: '#fff'
        }
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          textTransform: 'none'
        }
      }
    },
    MuiOutlinedInput:{
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline':{
            borderColor: theme.palette.primary.main
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main // Change on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
            borderWidth:'1px'// Change when focused
          }
        })
      }
    },
    MuiInputLabel:{
      styleOverrides:{
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize:'0.875rem'
        })
      }
    }
  }
})

export default theme
