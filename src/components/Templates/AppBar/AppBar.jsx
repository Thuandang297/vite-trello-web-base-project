import Box from '@mui/material/Box'
import SelectMode from '~/components/Molecules/ModeSelect/ModeSelect'
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
function AppBar() {
  return (
    <Box sx={{
      width:'100%',
      backgroundColor:'primary.light',
      height:( theme ) => theme.trello.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap:1,
      overflowX:'auto',
      padding:'0.5rem'
    }}>
      <Box sx={{ display: 'flex', alignItems:'center' }} gap={2} >
        <AppsIcon sx={{ color:'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems:'center' }} gap={0.5}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize='small' sx={{ color:'primary.main' }} />
          <Typography variant='span' sx={{ fontSize: '1.2', color: 'primary.main', fontWeight: 'bold' }}>Trello</Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap:1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
        </Box>

        <Button variant="outlined" endIcon={<QueueIcon />}>Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap:2 }} >
        <TextField id="outlined-search" label="Search..." size='small' type="search" sx={{ minWidth: '120px' }} />
        <SelectMode/>
        <Tooltip title="Notifications">
          <Badge badgeContent={3} color="primary">
            <NotificationsNoneIcon sx={{ cursor: 'pointer', color: 'primary.main' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer' }} color="primary" gap={0.5} />
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>)
}

export default AppBar
