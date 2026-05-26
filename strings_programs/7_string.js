// 7. Count Occurrences of a Word

let str = "hello hi hello bye hello hi"

let words = str.split(" ")
let obj = {}

for(let word of words){

    if(obj[word]){
        obj[word]++
    }else{
        obj[word] = 1
    }

}

console.log(obj)