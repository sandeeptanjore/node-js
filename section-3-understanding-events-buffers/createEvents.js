const { log } = require('console');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (userName) => {
  console.log(`Hello ${userName} and welcome to events in node js`);
});

eventEmitter.once('pushnotify', () => {
  console.log('This event will only run once');
});

const myListener = () => console.log('I am a test listener');
eventEmitter.on('test', myListener);
eventEmitter.emit('test');
eventEmitter.emit('test');
eventEmitter.emit('test');
eventEmitter.removeListener('test', myListener);
eventEmitter.emit('test');

console.log('============');

// Emit the event
eventEmitter.emit('greet', 'Sandeep');
eventEmitter.emit('greet', 'chai');
eventEmitter.emit('pushnotify');
eventEmitter.emit('greet', 'Sandeep');
eventEmitter.emit('pushnotify');
