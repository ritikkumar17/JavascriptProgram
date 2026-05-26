//8 Find largest string

// let str = ["apple","banana","cherry"]
// let largest = str[0]
// for(let i = 0;  i< str.length; i++){
//     if (str[i].length > largest.length){
//         largest = str[i]
//     }
// }
// console.log(largest)





//find smallest string
let str = ["apple","banana","cherry"]
let small = str[0]
for(let i = 0;  i< str.length; i++){
    if (str[i].length < small.length){
        small = str[i]
    }
}
console.log(small)