// 8. Capitalize Each Word (Title Case)

let input = "hello world from js"

let data = input.split(" ").map((word)=>{
    return word[0].toUpperCase()+word.slice(1)
}).join(" ")
console.log(data)