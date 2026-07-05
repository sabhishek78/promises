// Chaining
// Create a promise that resolves with
// 5
// Chain .then() so the output becomes
// 5
// 10
// 20
// 21
// Hint:
// multiply by 2
// multiply by 2
// add 1
let promise = new Promise((resolve, reject)=>{
    resolve(5);
});

promise.then((msg)=>{
    console.log(msg);
    return msg;
}).then((msg)=>{
    msg *= 2;
    console.log(msg);
    return msg;
}).then((msg)=>{
    msg *= 2;
    console.log(msg);
    return msg;
}).then((msg)=>{
    msg += 1;
    console.log(msg);
    return msg;
})











// let prom = new Promise((resolve, reject) => {
//     resolve(5);
// }).then((num) => {
//     console.log(num);
//     return num * 2;
// }).then((num) => {
//     console.log(num);
//     return num * 2;
// }).then((num) => {
//     console.log(num);
//     return num + 1;
// }).then((num) => {
//     console.log(num);
// })