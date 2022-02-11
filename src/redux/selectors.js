import { createSelector } from '@reduxjs/toolkit'
export const todosSelector = state => state.todos
export const searchTextSelector = state => state.filters.search
export const statusSelector = state => state.filters.status
export const prioritiesSelector = state => state.filters.priorities

export const todosRemainingSelector = createSelector(
  todosSelector,
  searchTextSelector,
  statusSelector,
  prioritiesSelector,

  (todos, searchText, status, priorities) => {
    if (status === 'all')
      return todos.filter(todo => {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText)
      })

    return todos.filter(todo => {
      return (
        todo.name.includes(searchText) &&
        (status === 'completed' ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      )
    })
  }
)
