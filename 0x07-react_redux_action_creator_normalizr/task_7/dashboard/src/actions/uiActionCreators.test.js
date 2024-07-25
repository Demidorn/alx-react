import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { loginSuccess, loginFailure, loginRequest } from "./uiActionCreators";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe("tests for UI notification action creators", () => {
  it("should create proper action for login", () => {
    const email = "dornkaizen@gmail.com";
    const password = "TryDoItNow";

    expect(login(email, password)).toEqual({
      type: LOGIN,
      user: { email: "dornkaizen@gmail.com", password: "TryDoItNow" },
    });
  });

  it("should create proper action for logout", () => {
    expect(logout()).toEqual({ type: LOGOUT });
  });

  it("should create proper action for displaying notification drawer", () => {
    expect(displayNotificationDrawer()).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER,
    });
  });

  it("should create proper action for hiding notification drawer", () => {
    expect(hideNotificationDrawer()).toEqual({
      type: HIDE_NOTIFICATION_DRAWER,
    });
  });
});

describe('loginRequest action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates LOGIN and LOGIN_SUCCESS when fetching login succeeds', () => {
    fetchMock.getOnce('/dist/login-success.json', {
      body: { user: 'test' },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, payload: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_SUCCESS, payload: { user: 'test' } }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOGIN and LOGIN_FAILURE when fetching login fails', () => {
    fetchMock.getOnce('/dist/login-success.json', 404);

    const expectedActions = [
      { type: LOGIN, payload: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_FAILURE, payload: new Error('Not Found') }
    ];
    const store = mockStore({ user: {} });

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});