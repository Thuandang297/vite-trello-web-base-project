import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

const PageLoadingSpinner = ({ caption }) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100vh',
      gap: '2'
    }}>
      <CircularProgress />
      <Typography>{caption}</Typography>
    </Box>
  )
}
export default PageLoadingSpinner