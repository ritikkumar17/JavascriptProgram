// 1 count Vowels

// let input = "hellO world"
// let data = input.toLowerCase()
// let count=0

// for(let i = 0; i< data.length; i++ ){
//     let ch = data[i]
//     if(ch =="a" || ch=="e"|| ch =="i" || ch=="o" || ch=="u"){
//         count++
//     }
// }
// console.log(count)

// 2nd way

let input = "ritik kumar"
let data = input.toLowerCase()
let count =0
for(let i = 0; i< data.length; i++){
    let ch="aeiou"
    if(ch.includes(data[i])){
        count++
    }
}
console.log(count)


// 3rd way
let input = "ritik kumar"
let count = 0
let vowel =""
for(let ch of input.toLowerCase()){
    if("aeiou".includes(ch)){
        vowel += ch
        count++
    }
}
console.log(count)
console.log(vowel)