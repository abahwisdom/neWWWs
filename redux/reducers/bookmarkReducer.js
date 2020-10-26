import ADD_BOOKMARK from '../actions/types'
import DELETE_BOOKMARK from '../actions/types'

const initialState = {
    bookmarks: localStorage.getItem('news-bookmark')
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_BOOKMARK:
        return {
          ...state,
          bookmarks: action.payload
        };
      case DELETE_BOOKMARK:
        return {
                ...state,
                bookmarks: action.payload
              };
      default:
        return state;
    }
  }
  