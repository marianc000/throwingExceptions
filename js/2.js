//2.js
const errors = [new Error("MyMessage"), 'MyMessage', 111, { a: 1 }];
for (const err of errors) {
    setTimeout(() => { throw err; });
}
