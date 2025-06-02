
export const boardTableColumns = [
  { dataIndex: 'index', title: 'Index', width: 90, key: 'index' },
  {
    dataIndex: 'id', title: 'ID', minWidth: 150, key: 'id'
  },
  { key: 'title', dataIndex: 'title', title: 'Title', minWidth: 200 },
  { key: 'description', dataIndex: 'description', title: 'Description', minWidth: 450 },
  { key: 'type', dataIndex: 'type', title: 'Type', width: 150 },
  {
    key: 'createdAt', dataIndex: 'createdAt',
    title: 'Created at',
    type: 'number',
    width: 110
  },
  {
    key: 'updatedAt', dataIndex: 'updatedAt',
    title: 'Updated at',
    width: 200
  },
  {
    key: 'ownerIds', dataIndex: 'ownerIds',
    title: 'Owner',
    width: 200
  },
  {
    key: 'memberIds', dataIndex: 'memberIds',
    title: 'Members',
    width: 200
  }
]