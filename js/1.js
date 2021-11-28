// 1.js
const err = new Error('MyMessage', { cause: new RangeError("chainedMessage") });
err.name = 'MyError';
console.dir(err);
throw err;