import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from '../components/Filters/filters-slice'
import todosReducer from '../components/TodoList/todos-slice'

const store = configureStore({
  reducer: {
    filters: filtersReducer.reducer,
    todos: todosReducer.reducer,
  },
})

export default store
