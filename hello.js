
// Create a promise that:
// Resolves after 2 seconds
// Returns the string:
// "Hello Promises!"
// Expected output:
// Waiting...
// Hello Promises!

let executorFunction = (resolve, reject) => {
    console.log("Waiting...");
    setTimeout(() => { resolve("Hello Promises!"); }, 2000);
}
let prom1 = new Promise(executorFunction);

prom1.then((message) => {
    console.log(message);
})



