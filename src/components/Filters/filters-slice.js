import { SEARCH_FILTER_CHANGE } from '../../redux/constants'

const initState = {
  search: '',
  status: 'all',
  priotiry: '',
}
const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_FILTER_CHANGE:
      return {
        ...state.filters,
        search: action.payload,
      }
    default:
      return state
  }
}

export default filtersReducer
