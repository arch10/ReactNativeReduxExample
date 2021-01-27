import {
  BREWERY_SUCCESS,
  BREWERY_FAILURE,
  BREWERY_PROGRESS
} from "../actionTypes";

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
  return async (dispatch) => {
    const url = "https://api.openbrewerydb.org/breweries";
    dispatch(progress);
    try {
      const response = await fetch(url);
      const body = await response.json();
      dispatch(success(body));
    } catch (error) {
      console.log("An error occured while getting data.");
      dispatch(failure("An error occured while getting data."));
    }
  };
}
