// Find Most Reapeated Character

let input = "javascripttp"
let str =""
let repeated=""
let count=0
for (let ch of input){
      if(!str.includes(ch)){
        str += ch
      }else{
        repeated += ch
        count++
      }
}
console.log(str)
console.log(repeated + " is repeated element " + count)