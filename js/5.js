//5.js
const errors = ["situation", "another situation"];

function canThrow(i) {
    throw errors[i];
}

for (let i = 0; i < errors.length; i++) {
    try {
        canThrow(i);
    } catch (ex) {
        switch (ex) {
            case 'situation':
                console.log("dealing with a situation");
                break;
            case 'another situation':
                console.log("dealing with another situation");
                break;
        }
    }
}
