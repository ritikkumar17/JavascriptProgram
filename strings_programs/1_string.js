// Reverse a String

// 1st way
// let name = "ritik"
// let reverse = name.split("").reverse().join("")
// console.log(reverse)


// 2nd ways
let name = "ritik"
let rev =""
for(let i=name.length-1; i>= 0; i--){
      rev += name[i]
}
console.log(rev)

