// Find Longest Word in a String.

let str = "i am good boy"
let string = str.split(" ")

let greater =""

for (let ch of string){
    if(ch.length  > greater.length){
        greater = ch
    }
}

console.log('longest word is ' + greater)