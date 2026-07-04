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

let prom = new Promise((resolve, reject) => {
    resolve(5);
}).then((num) => {
    console.log(num);
    return num * 2;
}).then((num) => {
    console.log(num);
    return num * 2;
}).then((num) => {
    console.log(num);
    return num + 1;
}).then((num) => {
    console.log(num);
})