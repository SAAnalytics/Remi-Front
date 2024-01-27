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
  CREATE_HOTEL_PENDING,
  CREATE_HOTEL_FULFILLED,
  CREATE_HOTEL_REJECTED,
  VALIDATE_TOKEN_PENDING,
  VALIDATE_TOKEN_FULFILLED,
  VALIDATE_TOKEN_REJECTED,
  GET_PLANS_DATA_PENDING,
  GET_PLANS_DATA_FULFILLED,
  GET_PLANS_DATA_REJECTED,
  GET_REVIEWS_DATA_PENDING,
  GET_REVIEWS_DATA_FULFILLED,
  GET_REVIEWS_DATA_REJECTED,
  GET_HOTEL_DATA_PENDING,
  GET_HOTEL_DATA_FULFILLED,
  GET_HOTEL_DATA_REJECTED,
  DELETE_HOTEL_DATA_PENDING,
  DELETE_HOTEL_DATA_FULFILLED,
  DELETE_HOTEL_DATA_REJECTED,
} from './actionTypes';

import { useNavigate } from 'react-router-dom';
import Axios from '../views/Services';

export const testingAction = (flag) => {
  return (dispatch) => {
    dispatch({ type: ACTION_STATE, payload: flag });
  }
};

export const validateToken = (navigate, componentPath) => {
  // const token = localStorage.getItem('TOKEN');
  return (dispatch) => {
    dispatch({ type: VALIDATE_TOKEN_PENDING });
    Axios.get('/user/verify-token')
      .then(res => {
        dispatch({ type: VALIDATE_TOKEN_FULFILLED });
        navigate(componentPath);
      })
      .catch(er => dispatch({ type: VALIDATE_TOKEN_REJECTED }))
  }
}

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
        dispatch({ type: LOGIN_REJECTED, payload: er })
      })
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
};

export const handleHotelDetails = (dataObj) => {
  const { name, location, description, customAIDescription, room, slogan } = dataObj;
  return (dispatch) => {
    dispatch({ type: CREATE_HOTEL_PENDING });
    Axios.post('/business', {
      name,
      location,
      description,
      customAIDescription,
      room,
      slogan,
      place_id: 'xyz'
    })
      .then(res => {
        console.log(res.data);
        dispatch({ type: CREATE_HOTEL_FULFILLED, payload: res.data });
      })
      .catch(er => {
        dispatch({ type: CREATE_HOTEL_REJECTED, payload: er });
      })
  }
};

export const getHotelData = () => {
  // console.log('getHotelData')
  return (dispatch) => {
    dispatch({ type: GET_HOTEL_DATA_PENDING });
    Axios.get('/business')
      .then(res => {
        dispatch({ type: GET_HOTEL_DATA_FULFILLED, payload: res.data });
      })
      .catch(er => {
        dispatch({ type: GET_HOTEL_DATA_REJECTED, payload: er });
      })
  }
};

export const deleteHotelData = () => {
  // console.log('getHotelData')
  return (dispatch) => {
    dispatch({ type: DELETE_HOTEL_DATA_PENDING });
    Axios.delete('/business')
      .then(res => {
        dispatch({ type: DELETE_HOTEL_DATA_FULFILLED, payload: res.data });
      })
      .catch(er => {
        dispatch({ type: DELETE_HOTEL_DATA_REJECTED, payload: er });
      })
  }
};

export const getPlansData = () => {
  return (dispatch) => {
    dispatch({ type: GET_PLANS_DATA_PENDING });
    Axios.get('', {})
      .then(res => {
        dispatch({ type: GET_PLANS_DATA_FULFILLED, payload: res.data });
      })
      .catch(er => {
        dispatch({ type: GET_PLANS_DATA_REJECTED, payload: er });
      })
  }
};

export const getReviewsData = () => {
  return (dispatch) => {
    dispatch({ type: GET_REVIEWS_DATA_PENDING });
    Axios.get('/review')
      .then(res => {
        dispatch({ type: GET_REVIEWS_DATA_FULFILLED, payload: res.data });
      })
      .catch(er => {
        dispatch({ type: GET_REVIEWS_DATA_REJECTED, payload: er });
      })
  }
};
