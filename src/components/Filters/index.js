import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import filtersSlice from './filters-slice'
const { Search } = Input

export default function Filters() {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState('')
  const [status, setStatus] = useState('all')
  const [priorities, setPriorities] = useState([])

  const handleSearchInputChange = e => {
    setSearchText(e.target.value)
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value))
  }

  const handleStatusChange = e => {
    setStatus(e.target.value)
    dispatch(filtersSlice.actions.statusFilterChange(e.target.value))
  }
  const handlePriorityChange = priorities => {
    setPriorities(priorities)
    dispatch(filtersSlice.actions.prioritiesFilterChange(priorities))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search
          onChange={handleSearchInputChange}
          value={searchText}
          placeholder='input search text'
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group defaultValue={status} onChange={handleStatusChange}>
          <Radio value='all'>All</Radio>
          <Radio value='completed'>Completed</Radio>
          <Radio value='todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priorities}
          onChange={handlePriorityChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  )
}
