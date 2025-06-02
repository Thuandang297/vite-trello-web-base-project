import { Box, Container } from '@mui/material'
import { Table, Input, Select, Space, Button } from 'antd'
import { useEffect, useState } from 'react'
import { BoardApi } from '~/apis/boardApi'
import AppBar from '~/components/AppBar/AppBar'
import { boardTableColumns } from '~/config/boardTableConfig'
import { DatePicker } from 'antd'
import { Form } from 'antd'
const { Search } = Input
const { RangePicker } = DatePicker
const { Option } = Select
import { DEFAULT_PAGE, DEFAULT_SIZE } from '~/utils/constants'
const BooardList = () => {
  const [boardList, setBoardList] = useState({ items: [], total: 0 })
  const [page, setPage] = useState(DEFAULT_PAGE)
  const [pageSize, setPageSize] = useState(DEFAULT_SIZE)
  const [filters, setFilters] = useState({ name: '', description: '', visibility: '' })
  const [form] = Form.useForm()
  useEffect(() => {
    const fetchBoardList = async () => {
      const response = await BoardApi.fetchGetBoardsApi(page, pageSize)
      response.success && setBoardList(response?.data || [])
    }
    fetchBoardList()
  }, [page, pageSize])

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }
  const onSearch = (value) => {
  }

  const handleSearch = (value) => {

  }

  const onFinish = (values) => {
  }
  return (
    <Container maxWidth='false' disableGutters sx={{ height: '100vh' }}>
      <AppBar />
      <Box sx={{ height: (theme) => theme.trello.boardBarHeigth }} >
        <Space size="middle"
          style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Form form={form} onFinish={onFinish} layout="inline">
            <Form.Item name="search">
              <Search
                placeholder="Key search..."
                allowClear
                enterButton="Search"
                size="middle"
                onSearch={onSearch}
              />
            </Form.Item>
            <Form.Item name="searchByTitle">
              <Input
                placeholder="Search by title"
                value={filters.name}
                onChange={(e) => handleFilterChange('name', e.target.value)}
              />
            </Form.Item>
            <Form.Item name="searchByDescription">
              <Input
                placeholder="Search by description"
                value={filters.description}
                onChange={(e) => handleFilterChange('description', e.target.value)}
              />
            </Form.Item>

            <Form.Item name="visibility">
              <Select
                placeholder="Visibility"
                value={filters.valueVi}
                onChange={(value) => handleFilterChange('valueVi', value)}
                style={{ width: 200 }}
              >
                <Option value="public">Public</Option>
                <Option value="private">Private</Option>
              </Select>
            </Form.Item>

            <Form.Item name="owner">
              <Select
                placeholder="Owner"
                value={filters.owner}
                onChange={(value) => handleFilterChange('owner', value)}
                style={{ width: 200 }}
              >
                <Option value="user1">User 1</Option>
                <Option value="user2">User 2</Option>
              </Select>
            </Form.Item>

            <Form.Item name="member" >
              <Select
                placeholder="Member"
                value={filters.member}
                onChange={(value) => handleFilterChange('member', value)}
                style={{ width: 200 }}
              >
                <Option value="member1">Member 1</Option>
                <Option value="member2">Member 2</Option>
              </Select>
            </Form.Item>
            <Form.Item name="dateRange" >
              <RangePicker />
            </Form.Item>

            <Form.Item name="submit">
              <Button>Submit</Button>
            </Form.Item>
          </Form>
        </Space>
      </Box>
      <Box sx={{ height: (theme) => `${theme.trello.boardContentHeight}`, width: '100%' }}>
        <Table
          key={'board-table'}
          dataSource={boardList?.items || []}
          columns={boardTableColumns}
          pagination={{
            current: page,
            pageSize: pageSize,
            total: boardList.count,
            showSizeChanger: true
          }}
          onChange={(pagination) => {
            setPage(pagination.current)
            setPageSize(pagination.pageSize)
          }}
        />
      </Box>
    </Container>
  )
}

export default BooardList