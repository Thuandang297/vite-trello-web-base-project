import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import LockIcon from '@mui/icons-material/Lock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterIcon from '@mui/icons-material/Filter'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
const MENU_STYLE = {
  color: 'primary.main',
  bgcolor: 'white',
  paddingX: '5px',
  border: 'none',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.200'
  }
}
function BoardBar() {
  return (
    <Box sx={{ width:'100%',
      backgroundColor:'primary.light',
      height: ( theme ) => theme.trello.boardBarHeigth,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      paddingX: '2rem',
      borderTop:'1px solid #333' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }} gap={2} >
        <Chip
          icon={<SpaceDashboardIcon />}
          sx={MENU_STYLE}
          label="Trello Office"
          clickable />
        <Chip
          icon={<LockIcon />}
          sx={MENU_STYLE}
          label="Public/Private Workspace"
          clickable />
        <Chip
          icon={<AddToDriveIcon />}
          sx={MENU_STYLE}
          label="Add to Google Drive"
          clickable />
        <Chip
          icon={<BoltIcon />}
          sx={MENU_STYLE}
          label="Automation"
          clickable />
        <Chip
          icon={<FilterIcon />}
          sx={MENU_STYLE}
          label="Filter"
          clickable />

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center'}} gap={2}>
        <Button startIcon={<PersonAddIcon />} variant="outlined" size='small' >Invite</Button>

        <AvatarGroup
          max={3}
          total={5}
          sx={{
            '& .MuiAvatar-root': {
              width: '34px', height: '34px',
              fontSize: '12px'
            },
          }}>
          <Tooltip title="Thuan Dang">
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/64692168?s=400&u=2d0c1a38862fa298a9778d22d694be890c899af2&v=4" />
          </Tooltip>
          <Tooltip title="Thuan Dang">
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/64692168?s=400&u=2d0c1a38862fa298a9778d22d694be890c899af2&v=4" />
          </Tooltip>
          <Tooltip title="Thuan Dang">
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/64692168?s=400&u=2d0c1a38862fa298a9778d22d694be890c899af2&v=4" />
          </Tooltip>
          <Tooltip title="Thuan Dang">
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/64692168?s=400&u=2d0c1a38862fa298a9778d22d694be890c899af2&v=4" />
          </Tooltip>
          <Tooltip title="Thuan Dang">
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/64692168?s=400&u=2d0c1a38862fa298a9778d22d694be890c899af2&v=4" />
          </Tooltip>
          <Tooltip title="Thuan Dang">
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/64692168?s=400&u=2d0c1a38862fa298a9778d22d694be890c899af2&v=4" />
          </Tooltip>
        </AvatarGroup>

      </Box>
    </Box>
  )
}

export default BoardBar
