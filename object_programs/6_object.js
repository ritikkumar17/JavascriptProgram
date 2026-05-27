// 6 Freeze object 
const user = {
    name: "ritik",
    age: 24
}

Object.freeze(user)      // Object.seal()=> to allowed only update

user.name = "mohit"
user.city = "Punjab"
delete user.age

console.log(user)