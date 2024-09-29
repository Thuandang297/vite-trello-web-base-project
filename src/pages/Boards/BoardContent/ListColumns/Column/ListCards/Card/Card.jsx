import AttachmentIcon from '@mui/icons-material/Attachment'
import CommentIcon from '@mui/icons-material/Comment'
import PeopleIcon from '@mui/icons-material/People'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Card as MuiCard } from '@mui/material'
function Card({tempotaryHideMedia}) {
  if (tempotaryHideMedia) {
    return (
      <MuiCard sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
        <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
          <Typography>This my Thuans Task today</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{ cursor: 'pointer', maxWidth: 345, boxShadow: '0 3px 2px rgba(0,0,0,0.2)', overflow: 'unset' }}>
      {/* Box media */}
      {/* <CardMedia
        sx={{ height: 140 }}
        title="green iguana"
        src="https://avatars.githubusercontent.com/u/64692168?s=400&u=2d0c1a38862fa298a9778d22d694be890c899af2&v=4"
      /> */}
      {/* Box content */}
      <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
        <Typography>This my Thuans Task today</Typography>
      </CardContent>
      {/* Box footer */}
      <CardActions sx={{ p: '0px 4px 8px 4px' }}>
        <Button startIcon={<PeopleIcon />} size="small">20</Button>
        <Button startIcon={<AttachmentIcon />} size="small">15</Button>
        <Button startIcon={<CommentIcon />} size="small">10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
