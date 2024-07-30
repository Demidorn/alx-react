import * as notificationsData from '../../../../notifications.json' assert { type: "json" };
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid' }
);

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});


const normalized = normalize(notificationsData.default, [notification]);

// console.log('Normalized Data:', normalized);

export { normalized, getAllNotificationsByUser };


function getAllNotificationsByUser(userId){
  const output = [];
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      const messageId = notifications[id].context;
      output.push(messages[messageId]);
    }
  }
  return output;
}

const notifications = new schema.Entity('notifications');
export const notificationsNormalizer = (data) => normalize(data, [notifications]);