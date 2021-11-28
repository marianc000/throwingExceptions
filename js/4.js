//4.js
const errors = [new Error("situation"), new Error("another situation")];

function canThrow(i) {
    throw errors[i];
}

for (let i = 0; i < errors.length; i++) {
    try {
        canThrow(i);
    } catch (err) {
        switch (err.message) {
            case 'situation':
                console.log("dealing with a situation");
                break;
            case 'another situation':
                console.log("dealing with another situation");
                break;
        }
    }
}
