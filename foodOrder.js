// 14. Food Order
// Simulate
// Choose Food
// ↓
// Prepare Food
// ↓
// Pack Food
// ↓
// Deliver Food
// Each step should take 1 second.
// Modify the program so that:

// ❌ If food preparation fails, print:

// Preparing food...
// Food preparation failed!
// The remaining steps (Pack and Deliver) should not execute.
// Use .catch() to handle the error.
function chooseFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Choosing food...');
            resolve();
        }, 1000);
    })
}

function prepareFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Preparing food...');
            reject('Food preparation failed!');
        }, 1000);
    })
}

function packFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Packing food...');
            resolve();
        }, 1000);
    })
}

function deliverFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Delivering food...');
            resolve();
        }, 1000);
    })
}

chooseFood().then(() => prepareFood()).then(() => packFood()).then(() => deliverFood()).catch((err)=>console.log(err));