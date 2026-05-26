// Removing Duplicates from string

let input = "programming"
let str=""

for(let ch of input){
   if(!str.includes(ch)){
    str+= ch
   }
}
console.log(str)