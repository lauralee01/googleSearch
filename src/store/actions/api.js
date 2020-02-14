import * as Types from '../types';


export const getSearchData = data => {
  return dispatch => {
    dispatch({
      type: Types.FETCH_SEARCHDATA,
      payload: data
    });
  };
};
export const getSearchQuery = (data, history )=> {
  return dispatch => {
    dispatch({
      type: Types.GET_SEARCHDATA,
      payload: data
    });
    history.push('./search-results')
  };
};
