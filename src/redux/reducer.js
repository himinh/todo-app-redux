import filtersReducer from '../components/Filters/filters-slice'
import todosReducer from '../components/TodoList/todos-slice'

const rootReducer = (state = {}, action) => {
  return {
    filters: filtersReducer(state.filters, action),
    todos: todosReducer(state.todos, action),
  }
}

export default rootReducer
