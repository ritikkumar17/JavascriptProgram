// 11 Check Array is Palindrome

let arr = [1,2,3,2,1]

let original = [...arr]

let reverse = [...arr].reverse()

if(original.join("") === reverse.join("")){
    console.log("Palindrome")
}else{
    console.log("Not Palindrome")
}


// 2nd way

//let str = "madam"
// let reverse = ""

// for(let i = str.length - 1; i >= 0; i--){
//     reverse += str[i]
// }

// if(str === reverse){
//     console.log("Palindrome")
// }else{
//     console.log("Not Palindrome")
// }

//3rd way

// let str = "madam"

// let reverse = str.split("").reverse().join("")

// if(str === reverse){
//     console.log("Palindrome")
// }else{
//     console.log("Not Palindrome")
// }