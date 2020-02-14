import * as Types  from '../types';
const initialState = {
    searchData: [],
    searchQuery: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SEARCHDATA:
            return {
              ...state,
              searchData: action.payload 
            };
          case Types.GET_SEARCHDATA:
            return {
              ...state,
              searchQuery: action.payload 
            };  
      default:
        return state;
    }
  };