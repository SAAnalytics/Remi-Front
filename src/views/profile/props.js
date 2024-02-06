import {
  getReviewsData,
  getHotelData,
} from '../../Redux/action';

export const mapStateToProps = (state) => ({
  allReviewsData: state.allReviewsData,
  hotelDetailsRedux: state.hotelDetailsRedux,
  activeUserDetails: state.activeUserDetails,
});

export const mapDispatchToProps = (dispatch) => ({
  getReviewsData: () => dispatch(getReviewsData()),
  getHotelData: () => dispatch(getHotelData()),
});