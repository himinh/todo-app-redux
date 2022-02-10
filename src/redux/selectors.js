import { createSelector } from 'reselect'
export const todosSelector = state => state.todos
export const searchTextSelector = state => state.filters.search

export const todosRemainingSelector = createSelector(
  todosSelector,
  searchTextSelector,
  (todos, searchText) => {
    const todosRemaining = todos.filter(todo => todo.name.includes(searchText))
    return todosRemaining
  }
)
