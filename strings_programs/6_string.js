// Check ANAGRAM

let input1  = "listen"
let input2 = "silent"

if(input1.split("").sort().join("") === input2.split("").sort().join("")){
    console.log("Anagram string")
}else{
    console.log("Not a Anagram string")
}
