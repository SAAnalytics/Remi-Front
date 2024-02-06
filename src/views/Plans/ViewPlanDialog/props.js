import {
  selectPlan,
} from '../../../Redux/action';

export const mapDispatchToProps = (dispatch) => ({
  selectPlan: (planId) => dispatch(selectPlan(planId)),
});

export const mapStateToProps = (state) => ({
  sessionId: state.sessionId,
});