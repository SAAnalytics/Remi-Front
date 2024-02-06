import {
  handlebilling,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  handlebilling: () => dispatch(handlebilling()),
});