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
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects
} from '@dnd-kit/core'
import { useState, useEffect } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Card from './ListColumns/Column/ListCards/Card/Card'
import Columns from './ListColumns/Column/Column'
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
  const TYPE = {
    COLUMN: 1,
    CARD: 2
  }
  const [orderedColumns, setOrderedColumns] = useState([])
  const [activeItemType, setActiveItemType] = useState()
  const [activeItemId, setActiveItemId] = useState()
  const [activeItemData, setActiveItemData] = useState()

  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
    })
  }

  useEffect(() => {
    setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    const dragedData = active?.id
    const overData = over?.id
    if (dragedData != overData) {
      //Check drag column
      if (activeItemType == TYPE.COLUMN) {
        const oldIndex = orderedColumns?.findIndex(column => column._id == dragedData)
        const newIndex = orderedColumns?.findIndex(column => column._id == overData)
        const dndOderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
        //Get list ids has ordered of column
        // const dndOderedColumnIds = dndOderedColumns?.map(column => column._id)
        // Update the column again
        setOrderedColumns(dndOderedColumns)
      }
      else {
        //Check drag card
        //1.Get id of column active now
        const columnId = active?.data?.current?.columnId

        //2.Get cards of column
        let columnOfActiveCard = orderedColumns?.find((column) => (column._id == columnId))

        //3 Get old index and new index of array
        const oldIndex = columnOfActiveCard.cardOrderIds?.findIndex(cardId => cardId == dragedData)
        const newIndex = columnOfActiveCard.cardOrderIds?.findIndex(cardId => cardId == overData)

        //3.Take arrayMove for list card to change index of card to target index
        const listCardOrderIds = arrayMove(columnOfActiveCard.cardOrderIds, oldIndex, newIndex)
        columnOfActiveCard.cardOrderIds = listCardOrderIds
        columnOfActiveCard.cards = mapOrder(columnOfActiveCard?.cards, listCardOrderIds, '_id')
        //4.Set list column again
        setOrderedColumns(curr => (curr.map(column => {
          if (column._id == columnId) return columnOfActiveCard
          return column
        })))
      }
    }
    setActiveItemData(null)
    setActiveItemId(null)
    setActiveItemType(null)
  }

  const handleDragStart = (event) => {
    const { active } = event
    const checkType = active?.data?.current?.columnId ? TYPE.CARD : TYPE.COLUMN
    setActiveItemType(checkType)
    setActiveItemId(active?.id)
    setActiveItemData(active?.data?.current)
  }

  return (
    <Box sx={{
      width: '100%',
      backgroundColor: 'primary.main',
      display: 'flex',
      height: (theme) => `${theme.trello.boardContentHeight}`,
      p: '10px 0'
    }}>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
      >
        <ListColumns columns={orderedColumns} />
        <DragOverlay dropAnimation={customDropAnimation}>
          {!activeItemType && null}
          {activeItemType && activeItemType === TYPE.COLUMN && <Columns column={activeItemData} />}
          {activeItemType && activeItemType === TYPE.CARD && <Card card={activeItemData} />}

        </DragOverlay>
      </DndContext>
    </Box>
  )
}

export default BoardContent
