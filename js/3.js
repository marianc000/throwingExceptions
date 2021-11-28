//3.js
const errors = [new SyntaxError(), new ReferenceError()];

function canThrow(i) {
    throw errors[i];
}

for (let i = 0; i < errors.length; i++) {
    try {
        canThrow(i);
    } catch  (ex)  {
        if (ex instanceof SyntaxError) {
            console.log("doing something");
        } else if (ex instanceof ReferenceError) {
            console.log("doing something else");
        }
    }
}
