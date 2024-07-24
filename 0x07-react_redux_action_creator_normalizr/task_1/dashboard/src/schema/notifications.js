import * as notificationsData from '../../../../notifications.json' assert { type: "json" };
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

console.log( 'users:', {'5debd764a7c57c7839d722e9': user} );

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
  return notificationsData.filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

