// 5 convert object to array,
// convert array to object

const user={
    name:"ritik",
    age:24
}

console.log(Object.entries(user))

 let array = Object.entries(user).flat()
 console.log(array)
 

 // convert array to object

 const arr=[["color","red"],["shape","circle"]]
 const obj=Object.fromEntries(arr)
 console.log(obj)