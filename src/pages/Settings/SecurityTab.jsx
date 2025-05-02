import Lock from '@material-ui/icons/Lock'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useState } from 'react'
const SecurityTab = () => {
  const [hiddenPassword, setHiddenPassword] = useState(false)
  return (
    <Box sx={{ minWidth: '500px', height: 'fit-content', padding: '1em', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', gap: 2, borderRadius: '5px' }} >
      <Box sx={{ display: 'flex', justifyContent: 'center', fontWeight: '700' }}>
        <Typography variant='h4'>Change password</Typography>
      </Box>
      {/* Pass word */}
      <Box sx={{ display: 'flex', alignItems: 'center' }} >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: '#fff', mr: 1, my: 0.5 }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setHiddenPassword(!hiddenPassword)} edge="end">
                  {hiddenPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
          type={hiddenPassword ? 'password' : 'none'}
          label="Current password" sx={{ width: '100%' }} />
      </Box>
      {/* New password */}
      <Box sx={{ display: 'flex', alignItems: 'center' }} >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: '#fff', mr: 1, my: 0.5 }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setHiddenPassword(!hiddenPassword)} edge="end">
                  {hiddenPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
          type={hiddenPassword ? 'password' : 'none'}
          label="New password" sx={{ width: '100%' }} />
      </Box>
      {/* Confirm password*/}
      <Box sx={{ display: 'flex', alignItems: 'center' }} >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: '#fff', mr: 1, my: 0.5 }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setHiddenPassword(!hiddenPassword)} edge="end">
                  {hiddenPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
          type={hiddenPassword ? 'password' : 'none'}
          label="Confirm new password" sx={{ width: '100%' }} />
      </Box>
      {/* Action button */}
      <Button variant="contained" sx={{ width: '100%', color: '#fff', marginTop: 2 }}>Update</Button>
    </Box >
  )
}

export default SecurityTab