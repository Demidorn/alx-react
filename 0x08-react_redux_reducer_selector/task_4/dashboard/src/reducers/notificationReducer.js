import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { formJS } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';


const initialState = formJS({
  filter: 'DEFAULT',
  notifications: {},
  notificationList: []
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // return {
      //   ...state,
      //   notifications: action.data.map(notification => ({
      //     ...notification,
      //     isRead: false
      //   }))
      // };
      const normalizedData = notificationsNormalizer(action.data);
      return state
        .set('notifications', formJS(normalizedData.entities.notifications))
        .set('notificationList', normalizedData.result)


    case MARK_AS_READ:
      return state.updateIn(['notifications', action.index], notification => {
        return notification.set('isRead', true);
      });
    case SET_TYPE_FILTER:
     return state.set('filter', action.filter);
    default:
      return state;
  }
};

export default notificationReducer;