import { Button } from '@mui/material'
import './App.css'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

function App() {

  return (
    <>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AccessAlarm/>
      <ThreeDRotation/>
    </>
  )
}

export default App
