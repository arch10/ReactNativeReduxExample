import {
  BREWERY_SUCCESS,
  BREWERY_FAILURE,
  BREWERY_PROGRESS
} from '../actionTypes';

const initialState = {
  data: [],
  loading: false,
  error: false
};

export function breweryReducer(state = initialState, action) {
  switch (action.type) {
    case BREWERY_PROGRESS:
      return {
        ...state,
        loading: true,
        error: false
      };
    case BREWERY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.data
      };
    case BREWERY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data
      };
    default:
      return initialState;
  }
}
