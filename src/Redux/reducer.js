import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ACTION_STATE,
  LOGIN_REJECTED,
  LOGIN_FULFILLED,
  LOGIN_PENDING,
  SIGNUP_PENDING,
  SIGNUP_FULFILLED,
  SIGNUP_REJECTED,
  GET_REFRESH_TOKEN_PENDING,
  GET_REFRESH_TOKEN_FULFILLED,
  GET_REFRESH_TOKEN_REJECTED,
} from './actionTypes';

const initialState = {
  dummyState: 'TESTING REDUX IN APP',
  activeUserDetails: {},
  ussToken: '',
  refreshToken: '',
  isUserLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_STATE: {
      const state = action.payload;
      return {
        ...state,
        dummyState: state ? 'SUCCESSFULL REDUX TESTING DONE' : 'CHANGED_AGAIN',
      }
    };
    case GET_REFRESH_TOKEN_PENDING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case GET_REFRESH_TOKEN_FULFILLED: {
      const { accessToken, refreshToken } = action.payload;
      // console.log(token)
      // console.log(action.payload)
      localStorage.setItem('TOKEN', accessToken);
      localStorage.setItem('REFRESH_TOKEN', refreshToken);
      toast.success('Recieved Refresh Token!!!')
      return {
        ...state,
      }
    }
    case GET_REFRESH_TOKEN_REJECTED: {
      toast.error(action.payload, {
        position: toast.POSITION.BOTTOM_LEFT
      });
      return {
        ...state,
      }
    }
    case LOGIN_PENDING: {
      return {
        ...state,
      }
    }

    case LOGIN_FULFILLED: {

      const { user, resultMessage, accessToken, refreshToken } = action.payload;
      const { password, ...activeUserDetails } = user;
      if (accessToken) {
        localStorage.setItem('TOKEN', accessToken);
      }
      if (refreshToken) {
        localStorage.setItem('REFRESH_TOKEN', refreshToken);
      }
      toast.success(resultMessage)
      return {
        ...state,
        activeUserDetails,
        ussToken: accessToken,
        refreshToken,
        isUserLoggedIn: true,
      }
    };

    case LOGIN_REJECTED: {
      return {
        ...state,
      }
    };

    case SIGNUP_PENDING: {
      return {
        ...state,
      }
    };

    case SIGNUP_FULFILLED: {
      console.log(action.payload)
      return {
        ...state,
      }
    };
    case SIGNUP_REJECTED: {
      return {
        ...state,
      }
    }
    default: return state;
  }
};

export default reducer;