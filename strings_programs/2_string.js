// 2 check palindrome string

// let input = "racecar"
// let original = input
// let rev =""

// for(let i = input.length-1; i>=0; i--){
//      rev += input[i]
// }

// if(rev === original){
//     console.log(`${original} is a palindrome string`)
// }else{
//     console.log(`${original} is not a palindrome string`)
// }

// 2nd way
let name = "madam"
let reverse = name.split("").reverse().join("");
if(name == reverse){
    console.log(`${name} is a palindrome string`)
}else{
    console.log(`${name} is not a palindrome string`)
}