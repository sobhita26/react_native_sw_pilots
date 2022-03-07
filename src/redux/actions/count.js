import {COUNTER_CHANGE, SET_USER_DETAILS} from '../constants';
export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}

export const setUserDetails = (setUserDetails) => {
  return {
    type: SET_USER_DETAILS,
    payload: setUserDetails,
  };
}
