// src/components/LoadingOverlay.tsx
import { Box, Button } from '@mui/material'
import { Spin } from 'antd'
export default function LoadingOverlay(show = false) {
  if (!show) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(255,255,255,0.6)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        with: '200px',
        height: '120px',
        // backgroundColor: 'rgb(95, 87, 87)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '1rem'
      }}>
        <Spin />
        <Button sx={{ backgroundColor: 'rgb(95, 87, 87)', position: 'bottom', marginTop: '10px' }}>Cancel request</Button>
      </Box>

    </div>
  )
}
