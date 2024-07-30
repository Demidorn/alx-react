import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../actions/uiActionTypes";

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};
describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when an unknown action is passed', () => {
    const unknownAction = { type: 'UNKNOWN_ACTION' };
    expect(uiReducer(initialState, unknownAction)).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    expect(uiReducer(initialState, { type: HIDE_NOTIFICATION_DRAWER })).toEqual({
      ...initialState,
      isNotificationDrawerVisible: false
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(uiReducer(initialState, { type: LOGIN_SUCCESS })).toEqual({
      ...initialState,
      isUserLoggedIn: true
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    expect(uiReducer(initialState, { type: LOGIN_FAILURE })).toEqual({
      ...initialState,
      isUserLoggedIn: false
    });
  });

  it('should handle LOGOUT', () => {
    expect(uiReducer(initialState, { type: LOGOUT })).toEqual({
      ...initialState,
      isUserLoggedIn: false
    });
  });

});