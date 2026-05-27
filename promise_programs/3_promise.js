// Promise ke through sirf active users return karo.

const users = [
    { name: "Ritik", active: true },
    { name: "Mohit", active: false },
    { name: "Aman", active: true }
  ]

  function activeUsers(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(users.filter((data)=>{
               return data.active===true
            }))
        },2000)
    })
  }

  activeUsers(users).then((res)=> console.log(res))




//   Bonus Challenge (Interview Level)
// Program Definition

// Ek array hai:

// const users = [
//   { name: "Ritik", active: true },
//   { name: "Mohit", active: false },
//   { name: "Aman", active: true }
// ]

// Promise ke through sirf active users return karo.

// Expected Output
// [
//   { name: "Ritik", active: true },
//   { name: "Aman", active: true }
// ]