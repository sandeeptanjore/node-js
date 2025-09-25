const EventEmitter = require('events');

class Chat extends EventEmitter {
  sendMessage(msg) {
    console.log(`Message sent: ${msg}`);
    this.emit('messageReceived', msg);
  }
}

const chat = new Chat();
chat.on('messageReceived', (msg) => {
  console.log(`New Message received: ${msg}`);
});

// trigger the event
chat.sendMessage('Hello Sandeep');
