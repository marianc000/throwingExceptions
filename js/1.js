// 1.js
const err = new Error('MyMessage', { cause: 'MyCause' });
err.name = 'MyError';
console.dir(err);
console.dir(new RangeError());
throw err;