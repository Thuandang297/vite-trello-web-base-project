import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import FilterListIcon from '@mui/icons-material/FilterList'
import LockIcon from '@mui/icons-material/Lock'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import { useSelector } from 'react-redux'
import { selectCurrentActiveBoard } from '~/redux/activeBoard/activeBoardSlice'
import { capitalizeFirstLetter } from '~/utils/formatter'
const MENU_STYLE = {
  color: 'primary.main',
  bgcolor: 'primary.light',
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
  const board = useSelector(selectCurrentActiveBoard)
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'primary.light',
      height: (theme) => theme.trello.boardBarHeigth,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      paddingX: '1rem',
      borderTop: '1px solid #333'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }} gap={2} >
        <Chip
          icon={<SpaceDashboardIcon />}
          sx={MENU_STYLE}
          label={board?.title}
          clickable />
        <Chip
          icon={<LockIcon />}
          sx={MENU_STYLE}
          label={capitalizeFirstLetter(board?.type)}
          clickable />
        <Chip
          icon={<AddToDriveIcon />}
          sx={MENU_STYLE}
          label="Add to Google Drive"
          clickable />
        <Chip
          icon={<AutoAwesomeIcon />}
          sx={MENU_STYLE}
          label="Automation"
          clickable />
        <Chip
          icon={<FilterListIcon />}
          sx={MENU_STYLE}
          label="Filter"
          clickable />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }} gap={2}>
        <Button startIcon={<PersonAddIcon />} variant="outlined" size='small' >Invite</Button>
        <AvatarGroup
          max={3}
          total={5}
          sx={{
            '& .MuiAvatar-root': {
              width: '34px',
              height: '34px',
              fontSize: '12px',
              cursor: 'pointer',
              color: 'white',
              backgroundColor: '#898686',
              border: 'none',
              '& .first-of-type': {
                bgcolor: '#a4b0de'
              }
            }
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
