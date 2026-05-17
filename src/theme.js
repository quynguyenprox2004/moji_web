import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
// import { Backdrop } from '@mui/material'

// Create a theme instance.
const theme = createTheme({
  moji: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    text: {
      secondary: red[500]
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*:-webkit-scrollbars': {
            width: '8px',
            height: '8px'
          },
          '*:-webkit-scrollbars-thumb': {
            backgroundColor: 'red',
            borderRadius: '8px'
          },
          '*:-webkit-scrollbars-thumb:hover': {
            backgroundColor: '#008b94'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem'
        })
      }
    },
    MuiInputLable: {
      styleOverrides: {
        root: {
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
            borderColor: theme.palette.primary.light
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main
            }
          },
          '& fieldset': {
            boarderWidth: '1px !important'
          }
        })
      }
    }
  }
})

export default theme