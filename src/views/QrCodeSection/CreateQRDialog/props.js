import {
  getHotelData,
} from '../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getHotelData: () => dispatch(getHotelData()),
});

export const mapStateToProps = (state) => ({
  activeUserDetails: state.activeUserDetails,
  hotelDetailsRedux: state.hotelDetailsRedux,
});