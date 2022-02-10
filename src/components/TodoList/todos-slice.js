import { ADD_TODO } from '../../redux/constants'
const initState = [
  { id: 1, name: 'Learn yoga', priotiry: 'medium', completed: false },
  { id: 2, name: 'Learn javascript', priotiry: 'low', completed: true },
  { id: 3, name: 'Learn Redux', priotiry: 'High', completed: false },
]

const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]

    default:
      return state
  }
}

export default todosReducer
