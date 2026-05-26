// 3 Reverse an Array

// 1st way
// let arr = [1,2,3,4]
// let rev = arr.reverse()
// console.log(rev)



// 2nd way
let arr = [1,2,3,4]
let rev =[]

for (let num of arr){
    rev.unshift(num)
}
console.log(rev)

//3rd way
// let arr = [1,2,3,4]
// let rev = []

// for(let i = arr.length - 1; i >= 0; i--){
//     rev.push(arr[i])
// }

// console.log(rev)