// 7. Square Numbers
// Promise resolves with
// 4
// Use chaining so the outputs are
// 4
// 16
// 256

new Promise((resolve, reject) => {
    resolve(4);
}).then((num) => {
    console.log(num);
    return num * num;
}).then((num) => {
    console.log(num);
    return num * num;
}).then((num) => {
    console.log(num);
})