import {
  updateHotelDetals,
} from '../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  updateHotelDetals: (data) => dispatch(updateHotelDetals(data)),
});

export const mapStateToProps = (state) => ({
  hotelDetailsRedux: state.hotelDetailsRedux,
});