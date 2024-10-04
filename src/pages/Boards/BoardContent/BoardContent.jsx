import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/formatter'
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { useState, useEffect } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
function BoardContent(props) {
  const { board } = props
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 10
    }
  })
  const keyboardSensor = useSensor(KeyboardSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  const poiterSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  const sensors = useSensors(
    mouseSensor,
    touchSensor,
    keyboardSensor,
    poiterSensor
  )
  const [orderedColumns, setOrderedColumns] = useState([])
  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    const dragedData = active?.id
    const overData = over?.id
    if (dragedData != overData) {
      const oldIndex = orderedColumns?.findIndex(column => column._id == dragedData)
      const newIndex = orderedColumns?.findIndex(column => column._id == overData)
      const dndOderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      //Get list ids has ordered of column
      // const dndOderedColumnIds = dndOderedColumns?.map(column => column._id)
      // Update the column again
      setOrderedColumns(dndOderedColumns)
    }
  }

  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'primary.main',
      display: 'flex',
      height: (theme) => `${theme.trello.boardContentHeight}`,
      p: '10px 0'
    }}>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <ListColumns columns={orderedColumns} />
      </DndContext>
    </Box>
  )
}

export default BoardContent
