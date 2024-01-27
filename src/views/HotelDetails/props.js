import {
  getHotelData,
  deleteHotelData,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getHotelData: () => dispatch(getHotelData()),
  deleteHotelData: () => dispatch(deleteHotelData()),
});

export const mapStateToProps = (state) => ({
  hotelDetailsRedux: state.hotelDetailsRedux,
});