import {COUNTER_CHANGE, SET_USER_DETAILS} from '../constants';
const initialState = {
  count: 0,
  user: null
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      };  
    default:
      return state;
  }
};
export default countReducer;
