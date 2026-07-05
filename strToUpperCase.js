// 6. Convert String
// Promise resolves with
// "javascript"
// Use .then() to produce
// JAVASCRIPT

let promise = new Promise((resolve, reject) =>{
    resolve("javascript");
});

promise.then((msg)=>{
    console.log(msg.toUpperCase());
})











new Promise((res, rej) => {
    res("javascript");
}).then((msg) => {
    console.log(msg.toUpperCase());
})