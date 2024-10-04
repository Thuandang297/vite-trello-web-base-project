import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
function ListColumns({ columns }) {
  return (
    <SortableContext items={columns?.map((column => column._id))} strategy={horizontalListSortingStrategy}>
      {/* List Column */}
      <Box sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'inherit',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden'
      }} >
        {columns?.map(column => (
          < Column key={column?._id} column={column} />
        ))}

        <Box sx={{
          minWidth: '200px',
          maxWidth: '200px',
          margin: 1,
          borderRadius: '6px',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
          height: 'fit-content',
          bgcolor: '#ffffff3d'
        }}>
          <Box>
            <Button
              sx={{
                color: 'white',
                width: '100%',
                justifyContent: 'flex-start',
                pl: 2.5,
                pi: 1
              }}
              startIcon={<NoteAddIcon />}> Add new column</Button>
          </Box>
        </Box>
      </Box>
    </SortableContext>

  )
}

export default ListColumns
