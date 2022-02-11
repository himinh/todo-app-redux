import { Row, Tag, Checkbox } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import todosSlice from '../TodoList/todos-slice'
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

export default function Todo({ name, priority, completed, id }) {
  const [checked, setChecked] = useState(completed)
  const dispatch = useDispatch()

  const handleToggleTodoStatus = () => {
    dispatch(todosSlice.actions.toggleTodoStatus(id))
  }

  const toggleCheckbox = () => {
    setChecked(!checked)
    dispatch(todosSlice.actions.toggleTodoStatus(id))
  }

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag
        color={priorityColorMapping[priority]}
        style={{ margin: 0 }}
        onClick={handleToggleTodoStatus}
      >
        {priority}
      </Tag>
    </Row>
  )
}
