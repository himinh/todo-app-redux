import { combineReducers } from 'redux'
import filtersReducer from '../components/Filters/filters-slice'
import todosReducer from '../components/TodoList/todos-slice'

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todos: todosReducer(state.todos, action),
//   }
// }

const rootReducer = combineReducers({
  filters: filtersReducer,
  todos: todosReducer,
})

export default rootReducer
