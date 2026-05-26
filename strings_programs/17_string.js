// 17. Extract Unique Words from Sentence

let input = "the cat sat on the mat the"
let data = input.split(" ");

let unique=''
let duplicate =""

for(let ch of data){
    if(!unique.includes(ch)){
        unique += ch + " "
    }else{
        duplicate += ch +" "
    }
}

console.log(unique)
console.log(duplicate)