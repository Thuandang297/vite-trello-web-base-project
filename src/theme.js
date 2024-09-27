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
          light: '#fff',
          dark: '#333'
        }
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'// Adjust scrollbar width
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: '#f0f0f0' // Scrollbar background
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(157 153 153 / 87%)', // Scrollbar thumb color
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#5b6a70'
          }
        }
      }
    },
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
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          fontWeight:'bold',
          // 'backgroundColor':'#333'
        })
      }
    },
  }
})

export default theme
