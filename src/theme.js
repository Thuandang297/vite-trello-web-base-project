import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

export const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeigth: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#03a9f4',
          light: '#fff',
          dark: '#333',
          textColor:'#03a9f4'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#086b58',
          light: '#2d2d2d',
          dark: '#333',
          textColor: '#fff'
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
            height: '7px'// Adjust scrollbar width
          },
          '*::-webkit-scrollbar-track': {
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            margin: '8px' // Scrollbar background,
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dad8d8', // Scrollbar thumb color
            borderRadius: '8px',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#b6b3b3',
            height: '10px'
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main // Change on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
            borderWidth: '1px'// Change when focused
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          fontWeight: 'bold',
          
        })
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: () => ({
          '&.MuiTypography-body1': {
            fontSize: '0.875rem'
          }
        })
      }
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&.MuiCard-root': {
            color: theme.palette.primary.textColor,
            backgroundColor:theme.palette.primary.light
          }
        })
      }
    }
  }
})

export default theme
