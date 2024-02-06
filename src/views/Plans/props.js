import {
  getPlansData,
  getActiveSubscriptions,
  getHotelData,
} from '../../Redux/action';

export const mapStateToProps = (state) => ({
  allPlansData: state.allPlansData,
  activePlanDataId: state.activePlanDataId,
  hotelDetailsRedux: state.hotelDetailsRedux,
  activeHotelFlag: state.activeHotelFlag,
});

export const mapDispatchToProps = (dispatch) => ({
  getPlansData: () => dispatch(getPlansData()),
  getHotelData: () => dispatch(getHotelData()),
  getActiveSubscriptions: () => dispatch(getActiveSubscriptions()),
});