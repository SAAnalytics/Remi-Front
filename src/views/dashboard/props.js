import {
  getLineOneData,
  getLineTwoData,
  getBarData,
  getDashBoardCountData,
  getActiveSubscriptions,
} from '../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  getBarData: () => dispatch(getBarData()),
  getLineOneData: () => dispatch(getLineOneData()),
  getLineTwoData: () => dispatch(getLineTwoData()),
  getDashBoardCountData: () => dispatch(getDashBoardCountData()),
  getActiveSubscriptions: () => dispatch(getActiveSubscriptions()),
});

export const mapStateToProps = (state) => ({
  barGraphData: state.barGraphData,
  lineGraph1Data: state.lineGraph1Data,
  lineGraph2Data: state.lineGraph2Data,
  dashBoardCountData: state.dashBoardCountData,
  activePlanName: state.activePlanName,
});