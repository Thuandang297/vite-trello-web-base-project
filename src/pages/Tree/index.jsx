import { Tree } from 'antd'
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0'
          },
          {
            title: 'leaf',
            key: '0-0-0-1'
          }
        ]
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: 'Hehe', key: '0-0-1-0' }]
      }
    ]
  }
]
const TreeComponent = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info)
  }
  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info)
  }
  return (
    <Tree
      checkable
      // defaultExpandedKeys={['0-0-0', '0-0-1']}
      // defaultSelectedKeys={['0-0-1']}
      // defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  )
}
export default TreeComponent