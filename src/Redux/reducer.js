import {
  ACTION_STATE,
} from './actionTypes';

const initialState = {
  dummyState: 'TESTING REDUX IN APP'
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ACTION_STATE: {
      const state = action.payload;
      return {
        ...state,
        dummyState: state ? 'SUCCESSFULL REDUX TESTING DONE' : 'CHANGED_AGAIN',
      }
    }
    default: return state;
  }
};

export default reducer;