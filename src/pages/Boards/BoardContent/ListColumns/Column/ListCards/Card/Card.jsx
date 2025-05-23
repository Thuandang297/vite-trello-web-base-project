import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import AttachmentIcon from '@mui/icons-material/Attachment'
import CommentIcon from '@mui/icons-material/Comment'
import PeopleIcon from '@mui/icons-material/People'
import { Card as MuiCard } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
function Card(props) {
  const { card } = props

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card?._id,
    data: { ...card }
  })
  const dndKitCardStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? 'solid 3px #b3ccff' : undefined
  }
  const shouldShowCardAction = () => {
    return !!card?.memberIds?.length || !!card?.attachments?.length || !!card?.comments?.length
  }
  return (
    <MuiCard
      ref={setNodeRef}
      style={dndKitCardStyles}
      {...attributes}
      {...listeners}
      sx={{
        cursor: 'pointer', maxWidth: 345,
        boxShadow: '0 3px 2px rgba(0,0,0,0.2)',
        overflow: 'unset',
        display: card.FE_PlaceholderCard ? 'none' : 'block'
      }}>
      {/* Box media */}
      {card?.cover && (<CardMedia
        sx={{ height: 140 }}
        title={card?.title}
        image={card?.cover}
      />
      )}
      {/* Box content */}
      <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {/* Box footer */}
      {shouldShowCardAction() &&
        <CardActions sx={{ p: '0px 4px 8px 4px' }}>
          {!!card?.memberIds?.length &&
            <Button startIcon={<PeopleIcon />} size="small">{card.memberIds.length}</Button>}
          {!!card?.attachments?.length &&
            <Button startIcon={<AttachmentIcon />} size="small">{card.attachments.length}</Button>
          }
          {!!card?.comments?.length &&
            <Button startIcon={<CommentIcon />} size="small">{card.comments.length}</Button>
          }
        </CardActions>
      }

    </MuiCard>
  )
}

export default Card
