import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'all',
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      // mutation
      state.search = action.payload
    }, // type: 'filters/searchFilterChange'
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload
    },
  },
})
