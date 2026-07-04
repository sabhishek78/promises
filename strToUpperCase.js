// 6. Convert String
// Promise resolves with
// "javascript"
// Use .then() to produce
// JAVASCRIPT

new Promise((res, rej) => {
    res("javascript");
}).then((msg) => {
    console.log(msg.toUpperCase());
})