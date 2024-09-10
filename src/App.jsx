import Button from '@mui/material/Button'
import './App.css'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import AddIcon from '@mui/icons-material/Add'
import Typography  from '@mui/material/Typography'
function App() {
  return (
    <>
      <div>Dang Ngoc Thuan</div>
      <Typography variant="h2" color='text.secondary' >Test Typography</Typography>
      <Typography variant="text" color='text.secondary'>Text</Typography>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <AddIcon/>
      <ThreeDRotation/>
    </>
  )
}

export default App
