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
  defaultDropAnimationSideEffects,
  closestCorners,
  pointerWithin,
  getFirstCollision,
  closestCenter,
  MeasuringStrategy
} from '@dnd-kit/core'
import { useState, useEffect, useRef } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Card from './ListColumns/Column/ListCards/Card/Card'
import Columns from './ListColumns/Column/Column'
import { useCallback } from 'react'
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
  const lastOverId = useRef()
  const customDropAnimation = {

  }

  const collisionDetectionStrategy = useCallback((args) => {
    const { droppableContainers } = args
    //Check drag drop column
    if (activeItemType == TYPE.COLUMN) {
      const columnArgs = { ...args, droppableContainers: droppableContainers.filter(c => c['id'].includes('column')) }
      return closestCorners(columnArgs)
    }

    //Check drag card
    const pointerIntersections = pointerWithin(args) //Get intersection of poiter with items
    if (pointerIntersections.length === 0) return
    const intersections = pointerIntersections
    let overId = getFirstCollision(intersections, 'id')
    if (overId != null) {
      if (overId.includes('column')) {
        let columnIntersection = orderedColumns?.find(column => (column['_id'] == overId))
        //Check if column has cards then try to make droppableContainer for cards in this column
        if (columnIntersection?.cards?.length > 0) {
          overId = closestCenter({
            ...args,
            droppableContainers: droppableContainers?.filter(card => (columnIntersection['cardOrderIds']?.includes(card['id'])
              && card['id'] !== overId))
          })[0]?.id
          lastOverId.current = overId
        }
      }
      //Looking for column by columnId
      return [{ id: overId }]
    }
    return lastOverId.current ? [{ id: lastOverId.current }] : []
  }, [activeItemType, orderedColumns, TYPE.COLUMN])

  const updateColumnsWhenDragDropCard = (activeColumn, activeCardIndex, overColumn, overCardIndex, activeDraggingCardData) => {
    return setOrderedColumns(prevOrderedColumn => {
      return prevOrderedColumn?.map(column => {
        if (column._id == overColumn._id) {

          // Add active item card to over column in index newIndex
          column.cards.splice(overCardIndex, 0, activeDraggingCardData)

          //Update columnId for the card had move to a new column with new column id
          column.cards = column.cards?.map(item => ({ ...item, columnId: column._id }))
        }

        //Delete card data in active column
        if (column._id == activeColumn._id) {
          // Delete active item in active column

          column.cards.splice(activeCardIndex, 1)
        }
        column.cardOrderIds = column.cards.map(item => item._id)
        return column
      })
    })
  }
  useEffect(() => {
    const ordered = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumns([...ordered])
  }, [board])

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find(column => column?.cards?.map(card => card?._id).includes(cardId))
  }

  const handleDragStart = (event) => {
    const { active } = event
    const checkType = active?.data?.current?.columnId ? TYPE.CARD : TYPE.COLUMN
    setActiveItemType(checkType)
    setActiveItemId(active?.id)
    setActiveItemData(active?.data?.current)
  }

  const handleDragOver = (event) => {
    const { active, over } = event
    if (!active || !over) return
    if (activeItemType == TYPE.COLUMN) return
    const { id: idActiveItem, data: { current: activeDraggingCardData } } = active
    const { id: idOverItem } = over
    const activeColumn = findColumnByCardId(idActiveItem)
    const activeCardIndex = activeColumn?.cards?.findIndex(card => card._id == idActiveItem)

    //Check when overItem is column
    if (idOverItem?.includes('column-id')) {
      const overColumn = orderedColumns?.find(column => column._id == idOverItem)
      const newIndex = overColumn.cards.length
      updateColumnsWhenDragDropCard(activeColumn, activeCardIndex, overColumn, newIndex, activeDraggingCardData)
    }

    //Check when overItem is card

    const overColumn = findColumnByCardId(idOverItem)
    if (!activeColumn || !overColumn) return
    //If drop and drag in one column then use onDragEnd to update data after dragging
    if (activeColumn._id == overColumn._id) return
    const overCardIndex = overColumn?.cards?.findIndex(card => card._id == idOverItem)
    const isBelowOverItem =
      over &&
      active.rect.current.translated &&
      active.rect.current.translated.top >
      over.rect.top + over.rect.height

    const modifier = isBelowOverItem ? 1 : 0

    const newIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn.cards.length + 1
    updateColumnsWhenDragDropCard(activeColumn, activeCardIndex, overColumn, newIndex, activeDraggingCardData)
  }

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
        collisionDetection={collisionDetectionStrategy}
        measuring={{
          droppable: {
            strategy: MeasuringStrategy.Always,
          }
        }}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
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
