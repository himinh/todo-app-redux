import { ADD_TODO, SEARCH_FILTER_CHANGE } from './constants'

export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload,
  }
}

export const searchFilterChange = text => {
  return {
    type: SEARCH_FILTER_CHANGE,
    payload: text,
  }
}
