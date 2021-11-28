//6.js
function one() {
    throw new Error("one");
}

function two() {
    try {
        one();
    } catch (err) {
        throw new Error("two", { cause: err });
    }
}

try {
    two();
} catch (err) {
    console.log(err);
    console.dir(err);
}