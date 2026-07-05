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

function chooseFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Choosing food...');
            resolve();
        }, 1000);
    })
}

function prepareFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Preparing food...');
            resolve();
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

chooseFood().then(() => prepareFood()).then(() => packFood()).then(() => deliverFood());