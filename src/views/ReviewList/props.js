import {
  getReviewsData,
  getHotelData,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getReviewsData: () => dispatch(getReviewsData()),
  getHotelData: () => dispatch(getHotelData()),
});

export const mapStateToProps = (state) => ({
  allReviewsData: state.allReviewsData,
  hotelDetailsRedux: state.hotelDetailsRedux,
});