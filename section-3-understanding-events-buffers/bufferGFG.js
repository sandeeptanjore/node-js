// Different methods to create Buffer
const buffer1 = Buffer.alloc(100);
// const buffer2 = new Buffer('GFG'); //deprecated
const buffer3 = Buffer.from([1, 2, 3, 4]);

// Writing data to Buffer
buffer1.write('Happy Coding');

// Reading data from Buffer
const a = buffer1.toString('utf-8');
console.log(a);

// Check if the object is buffer or not
console.log(Buffer.isBuffer(buffer1));

// Check length of Buffer
console.log(buffer1.length);

// Concatenating two buffers i.e buffer 1 and buffer 3
const bufferThree = Buffer.concat([buffer1, buffer3]);
console.log(bufferThree);
