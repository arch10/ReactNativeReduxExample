import {
  BREWERY_SUCCESS,
  BREWERY_FAILURE,
  BREWERY_PROGRESS
} from '../actionTypes';

function success(response) {
  return {
    type: BREWERY_SUCCESS,
    data: response
  };
}

function failure(errorMessage) {
  return {
    type: BREWERY_FAILURE,
    data: errorMessage
  };
}

function progress() {
  return {
    type: BREWERY_PROGRESS
  };
}

export function getBrewery() {
  return (dispatch) => {
    //TODO("Get response from API and dispatch an appropriate action")
    console.log('Called getBrewery action');
  };
}
