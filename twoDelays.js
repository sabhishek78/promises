// 11. Two Delays
// Create
// wait(seconds)
// It returns a promise.
// Use chaining:
// wait(2)
// .then(...)
// .then(...)
// .then(...)

// Output

// 2 seconds passed
// 4 seconds passed
function wait(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}

wait(2)
    .then(() => {
        console.log("2 seconds passed");
        return wait(2);
    })
    .then(() => {
        console.log("4 seconds passed");
    });