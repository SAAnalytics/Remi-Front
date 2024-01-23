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

import { useNavigate } from 'react-router-dom';
import Axios from '../views/Services';

export const testingAction = (flag) => {
  return (dispatch) => {
    dispatch({ type: ACTION_STATE, payload: flag });
  }
};


export const handleSignup = (email, password, name) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_PENDING });
    Axios.post('/user', {
      email,
      password,
      name,
    })
      .then(res => dispatch({ type: SIGNUP_FULFILLED, payload: res }))
      .catch(er => dispatch({ type: SIGNUP_REJECTED, payload: er }));
  };
};


export const handleLogin = (email, password, navigate) => {
  // const navigate = useNavigate();
  return (dispatch) => {
    dispatch({ type: LOGIN_PENDING });
    Axios.post('/user/login', {
      email,
      password,
    })
      .then(res => {
        console.log(res);
        navigate('/dashboard');
        dispatch({ type: LOGIN_FULFILLED, payload: res.data })
      })
      .catch(er => {
        navigate('authentication/sign-up')
        dispatch({ type: LOGIN_REJECTED, payload: er })})
  };
};

export const getAccessToken = () => {
  const data = {
    refreshToken: localStorage.getItem('REFRESH_TOKEN'),
  }
  console.log(data);
  return (dispatch) => {
    dispatch({ type: GET_REFRESH_TOKEN_PENDING })
    Axios.post('/user/refresh-token', data)
      .then(res => {
        dispatch({ type: GET_REFRESH_TOKEN_FULFILLED, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_REFRESH_TOKEN_REJECTED, payload: err });
      })
  }
}
