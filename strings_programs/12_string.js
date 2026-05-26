// 12. Reverse Words in a Sentence

let input = "Hello World from JS"
let data = input.split(" ")
let reverse = ""
// let str = input.split(" ").reverse().join(" ")
// console.log(str)/

for(let i = data.length-1; i>=0; i--){
    reverse += data[i] + " "
}
console.log(reverse)