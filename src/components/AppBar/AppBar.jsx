import Box from '@mui/material/Box'
import SelectMode from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import Button from '@mui/material/Button'
import { ReactComponent as TrelloIcon } from '~/assets/icon-trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Templates from './Menus/Templates'
import Starred from './Menus/Starred'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'
import Profiles from './Menus/Profiles'
import QueueIcon from '@mui/icons-material/Queue'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function AppBar() {
  const [openCreateBoard, setOpenCreateBoard] = useState(false)
  const onCreateBoard = () => {
    setOpenCreateBoard(true)
  }
  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'primary.light',
      height: (theme) => theme.trello.tabBarSettingHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflowX: 'auto',
      paddingX: '2rem'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }} gap={2} >
        <Box>
          <Button
            component={Link}
            to="/boards"
            sx={{
              display: 'flex', alignItems: 'center', '&:hover': {
                opacity: '0.1'
              }
            }}>
            <SvgIcon component={AppsIcon} inheritViewBox sx={{ color: 'primary.main' }} />
          </Button>
        </Box>
        <Box>
          <Button sx={{
            display: 'flex', alignItems: 'center', '&:hover': {
              opacity: '0.1'
            }
          }} gap={0.5}>
            <SvgIcon component={TrelloIcon} inheritViewBox fontSize='small' sx={{ color: 'primary.main' }} />
            <Typography
              component={Link}
              to="/"
              sx={{
                fontSize: '1.2rem',
                color: (theme) => theme.palette.primary.main,
                fontWeight: 'bold',
                textDecoration: 'none'
              }}
            >
              Trello
            </Typography>
          </Button>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
        </Box>

        <Button onClick={onCreateBoard} variant="outlined" endIcon={<QueueIcon />}>Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <TextField id="outlined-search" label="Search..." size='small' type="search" sx={{ minWidth: '120px' }} />
        <SelectMode />
        <Tooltip title="Notifications">
          <Badge badgeContent={3} color="primary">
            <NotificationsNoneIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer' }} color="primary" gap={0.5} />
        </Tooltip>
        <Profiles />
      </Box>
    </Box>)
}

export default AppBar
