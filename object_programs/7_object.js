// 7 sort array of object

const users = [
    { name: "ritik", age: 24 },
    { name: "mohit", age: 20 },
    { name: "rohit", age: 28 }
]

// asecinding sort 
users.sort((a, b) => a.age - b.age)
console.log(users)
// Descending sort
users.sort((a,b)=>b.age - a.age)
console.log(users)
// Name Wise Sort (Alphabetical)
users.sort((a, b) => a.name.localeCompare(b.name))
console.log(users)