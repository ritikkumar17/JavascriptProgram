// 2 Fetch User Data Simulation

let obj ={
    id:1,
    name:"ritik"
}

function fetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(obj)
        },2000)
    })
}

fetchUser().then((res)=>{
    console.log(res)
    return res
})
.then((res1)=>{
    console.log(res1.name)
})
.catch(()=>{
    console.log("Sorry")
})



// Fetch User Data Simulation
// Program Definition

// Ek Promise function banao fetchUser()

// 2 second baad user object return karo:

// {
//    id: 1,
//    name: "Ritik"
// }

// Uske baad .then() me sirf user name print karo.

// Expected Output
// Ritik
// Concepts Used
// Async simulation
// Object resolve karna
// Promise chaining