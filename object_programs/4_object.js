// 4 object Destructuring , and check property Exists

const user ={
    name:"ritik",
    age:24
};
console.log(user.hasOwnProperty("name"))
console.log("name" in user)

let {name,age}=user
console.log(name)
console.log(age)