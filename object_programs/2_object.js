// 2 Loop Through object

//1st way
const user={
    name:"ritik",
    age:24,
    role:"developer"
}

for(let record in user){
    console.log(record, user[record])
}

// object.keys() 2nd way
const user = {
    name: "ritik",
    age: 24,
    role: "developer"
}

let keys = Object.keys(user)

for(let key of keys){
    console.log(key, user[key])
}

// 3rd way object.values() , when need only values.
let values = Object.values(user)

for(let value of values){
    console.log(value)
}

//4rth way object.entries()
const user = {
    name: "ritik",
    age: 24,
    role: "developer"
}

for(let [key, value] of Object.entries(user)){
    console.log(key, value)
}


//5 th methods using forEach method
Object.keys(user).forEach((key)=>{
    console.log(key, user[key])
})