import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';
import { Map } from 'immutable';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when an unknown action is passed', () => {
    const unknownAction = { type: 'UNKNOWN_ACTION' };
    expect(uiReducer(initialState, unknownAction).toJS()).toEqual(initialState.toJS());
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const newState = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true
    });
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const newState = uiReducer(initialState, { type: HIDE_NOTIFICATION_DRAWER });
    expect(newState.toJS()).toEqual({
      ...initialState.toJS(),
      isNotificationDrawerVisible: false
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const newState = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(newState.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: true
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    const newState = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(newState.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false
    });
  });

  it('should handle LOGOUT', () => {
    const newState = uiReducer(initialState, { type: LOGOUT });
    expect(newState.toJS()).toEqual({
      ...initialState.toJS(),
      isUserLoggedIn: false
    });
  });
});
