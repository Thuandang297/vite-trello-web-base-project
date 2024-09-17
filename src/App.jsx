import Button from '@mui/material/Button'
import { useColorScheme } from '@mui/material/styles'
import './App.css'

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}
function App() {
  return (
    <>
      <div>Dang Ngoc Thuan</div>
      <ModeToggle/>
    </>
  )
}

export default App
