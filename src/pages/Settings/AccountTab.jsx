import MailIcon from '@material-ui/icons/Mail'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Avatar, Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '~/redux/users/userSlice'
import { styled } from '@mui/material/styles'
const handleUpdateUserInfo = (data) => {

}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const AccountTab = () => {
  const user = useSelector(selectCurrentUser)
  return (
    <Box sx={{ minWidth: '500px', height: 'fit-content', padding: '1em', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', gap: 2, borderRadius: '5px' }} >
      {/* Picture and upload */}
      <Box sx={{ display: 'flex', padding: 1 }}>
        <Box>
          <Avatar
            alt="Tên người dùng"
            src=""
            sx={{ width: 100, height: 100, marginBottom: 1 }}
          />
          <Button tabIndex={-1}
            component="label"
            role={undefined}
            startIcon={<CloudUploadIcon size='small' />}
            variant='contained'
            sx={{ color: '#fff', fontSize: '13px' }}>Upload
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
        </Box>
        <Box sx={{ display: 'flex', height: '100px', flexDirection: 'column', justifyContent: 'center', marginLeft: '1rem' }}>
          <Typography sx={{ margin: '10px', fontWeight: 'bold' }} variant="h5" >{user?.userName}</Typography>
          <Typography sx={{ margin: '0px 10px' }} variant="span">{user?.displayName}</Typography>
        </Box>

      </Box>

      {/* Mail and name */}
      {/* Email */}
      <Box sx={{ display: 'flex', alignItems: 'center' }} >
        <TextField
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailIcon sx={{ color: '#fff', mr: 1, my: 0.5 }} />
              </InputAdornment>
            )
          }}
          label="Your email" disabled sx={{ width: '100%' }} defaultValue={user?.email} />
      </Box>
      {/* User name */}
      <Box sx={{ display: 'flex', alignItems: 'center' }} >
        <TextField
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon sx={{ mr: 1, my: 0.5 }} />
              </InputAdornment>
            )
          }}
          label="User Name" disabled sx={{ width: '100%' }} defaultValue={user?.userName} />
      </Box>
      {/* Display name */}
      <Box sx={{ display: 'flex', alignItems: 'center' }} >
        <TextField
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon sx={{ mr: 1, my: 0.5 }} />
              </InputAdornment>
            )
          }}
          label="Your display name" sx={{ width: '100%' }} defaultValue={user?.displayName} />
      </Box>
      {/* Action button */}
      <Button onClick={handleUpdateUserInfo} variant="contained" sx={{ width: '100%', color: '#fff', marginTop: 2 }}>Update</Button>
    </Box>
  )
}

export default AccountTab