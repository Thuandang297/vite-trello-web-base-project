import PersonIcon from '@mui/icons-material/Person'
import SecurityIcon from '@mui/icons-material/Security'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppBar from '~/components/AppBar/AppBar'
import AccountTab from './AccountTab'
import SecurityTab from './SecurityTab'

export default function Settings() {
  const TAB_NAME = {
    ACCOUNT: 'account',
    SERCURITY: 'sercurity'
  }
  const location = useLocation()

  const getDefaultTab = () => {
    if (location.pathname.includes(TAB_NAME.ACCOUNT)) return TAB_NAME.ACCOUNT
    return TAB_NAME.SERCURITY
  }

  const [tabValue, setTabValue] = useState(getDefaultTab())

  const handleChange = (event, newValue) => {
    setTabValue(newValue)
  }

  return (
    <Container maxWidth='false' disableGutters sx={{ height: '100vh' }}>
      <AppBar />
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', height: theme => theme.trello.appBarHeight }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" >
              <Tab sx={{ display: 'flex', alignItems: 'center', justifyItem: 'center' }}
                icon={<PersonIcon />}
                label={TAB_NAME.ACCOUNT}
                value={TAB_NAME.ACCOUNT}
                component={Link}
                to='/settings/account'
                iconPosition="start" />
              <Tab icon={<SecurityIcon />}
                label={TAB_NAME.SERCURITY}
                value={TAB_NAME.SERCURITY}
                component={Link}
                to='/settings/sercurity'
                iconPosition="start" />
            </TabList>
          </Box>
          <Box sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            backgroundColor: 'primary.main',
            height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeigth})`
          }}>
            <TabPanel value={TAB_NAME.ACCOUNT} >
              <AccountTab />
            </TabPanel>
            <TabPanel value={TAB_NAME.SERCURITY}>
              <SecurityTab />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </Container>
  )
}
