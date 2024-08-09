// notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  const state = fromJS({
    filter: 'URGENT',
    notifications: {
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    }
  });

  it('filterTypeSelected should return the current filter type', () => {
    expect(filterTypeSelected(state)).toEqual('URGENT');
  });

  it('getNotifications should return the list of notifications', () => {
    const expectedNotifications = fromJS({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    });
    expect(getNotifications(state)).toEqual(expectedNotifications);
  });

  it('getUnreadNotifications should return the list of unread notifications', () => {
    const expectedUnreadNotifications = fromJS({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
    });
    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});
