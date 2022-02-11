import {
  ADD_TODO,
  TOGGLE_TODO_STATUS,
  SEARCH_FILTER_CHANGE,
  STATUS_FILTER_CHANGE,
  PRIORITIES_FILTER_CHANGE,
} from './constants'

export const addTodo = payload => ({
  type: ADD_TODO,
  payload,
})

export const toggleTodoStatus = todoId => ({
  type: TOGGLE_TODO_STATUS,
  payload: todoId,
})
export const searchFilterChange = text => ({
  type: SEARCH_FILTER_CHANGE,
  payload: text,
})

export const statusFilterChange = status => ({
  type: STATUS_FILTER_CHANGE,
  payload: status,
})

export const prioritiesFilterChange = priorities => ({
  type: PRIORITIES_FILTER_CHANGE,
  payload: priorities,
})
