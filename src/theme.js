import { colors } from '@mui/material'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
const TAB_SETTING_HEIGHT = '56px'

export const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeigth: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
    tabBarSettingHeight: TAB_SETTING_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#03a9f4',
          light: '#fff',
          dark: '#333',
          textColor: '#333'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#086b58',
          light: '#fff',
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
            borderRadius: '8px'
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
        root: ({ theme }) => ({
          fontSize: '1rem',
          textTransform: 'none',
          '&:hover': {
            opacity: '0.4',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.light,
            transition: 'all 0.3s ease'
          }
        })
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
          },
          '&:hover .Mui-disabled': {
            cursor: 'pointer'
          },
          '.MuiOutlinedInput-input': {
            color: theme.palette.primary.main
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main
          },
          // hover khi error
          '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main
          },
          // focus khi error
          '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.error.main
          },
          // hover khi error
          '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.disabled
          },
          '&.Mui-disabled .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.disabled
          },
          '&.MuiSelect-iconOutlined': {
            color: theme.palette.primary.main
          },

        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '1rem'
        })
      }
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          fontWeight: 'bold'

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
            backgroundColor: theme.palette.primary.light
          }
        })
      }
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          '&.MuiInputAdornment-outlined': {
            cursor: 'pointer'
          }
        })
      }
    },
    MuiList: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main
        })
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: () => ({
          color: '#333'
        })
      }
    }
  }
})

export default theme
