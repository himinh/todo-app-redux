import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'todos',
  initialState: [
    { id: 1, name: 'Learn yoga', priority: 'Medium', completed: false },
    { id: 2, name: 'Learn javascript', priority: 'Low', completed: true },
    { id: 3, name: 'Learn Redux', priority: 'High', completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload)
      currentTodo.completed = !currentTodo.completed
    },
  },
})
