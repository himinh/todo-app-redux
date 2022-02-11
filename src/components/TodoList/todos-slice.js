import { ADD_TODO, TOGGLE_TODO_STATUS } from '../../redux/constants'
const initState = [
  { id: 1, name: 'Learn yoga', priority: 'Medium', completed: false },
  { id: 2, name: 'Learn javascript', priority: 'Low', completed: true },
  { id: 3, name: 'Learn Redux', priority: 'High', completed: false },
]

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]
    case TOGGLE_TODO_STATUS:
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todosReducer
