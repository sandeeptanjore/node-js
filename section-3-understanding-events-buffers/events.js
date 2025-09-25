// Import the events module
const EventEmitter = require('events');

// Create an event emitter instance
const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on('greet', () =>{
    console.log('Hello there');
});

// Emit or triggering the event
myEmitter.emit('greet');

let geek1 = (msg) =>{
    console.log("Message from geek1: " + msg);
};

let geek2 = (msg) =>{
    console.log("Message from geek2: " + msg);
};

// Registering the events
myEmitter.on('My First Event', geek1);

// Triggering the event
myEmitter.emit('My First Event', "Event Occurred");