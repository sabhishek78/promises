// 3. Random Success
// Generate a random number between 1 and 10.
// If the number is greater than 5
// Success!
// Otherwise
// Failed!

let prom = new Promise((resolve, reject) => {
    let rand = Math.floor(Math.random()*10);
    if(rand > 5){
        resolve("Success");
    }
    else{
        reject("Failed!");
    }
}).then((msg) => console.log(msg)).catch((err) => console.log(err));