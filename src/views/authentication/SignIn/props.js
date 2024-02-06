import {
  handleLogin,
  validateToken,
} from '../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email, passsword, navigate) => dispatch(handleLogin(email, passsword, navigate)),
  validateToken: (navigate, componentPath) => dispatch(validateToken(navigate, componentPath)),
});

export const mapStateToProps = (state) => ({
  isUserLoggedIn: state.isUserLoggedIn,
});