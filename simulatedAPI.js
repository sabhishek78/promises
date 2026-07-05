// 12. Simulated API
// Create
// fetchUser()
// Returns after 2 seconds
// {
//    id:1,
//    name:"John"
// }
// Then print
// User Found
// John

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = {
                id: 1,
                name: 'John',
            }
            resolve(user);
        }, 2000);
    });
}

fetchUser().then((msg)=>{
    console.log("User Found");
    console.log(msg.name);
});