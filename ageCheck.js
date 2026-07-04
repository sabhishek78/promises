// 2. Resolve or Reject
// Create a promise that checks a variable:
// const age = 20;
// If age is 18 or older
// Access Granted
// Otherwise
// Access Denied
// Use both .then() and .catch().
const age = 20;

let execF = (resolve, reject) => {
    if (age >= 18) {
        resolve("Access Granted");
    }
    else {
        reject("Access Denied");
    }
};

let prom1 = new Promise(execF);

prom1.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
})
