// 4 Remove Duplicate Elements

let arr = [1,2,2,3,4,4]
let original =[]
let duplicate=[]


for(let i =0; i< arr.length; i++){
    if(!original.includes(arr[i])){
        original.push(arr[i])
    }else{
        duplicate.push(arr[i])
    }
}

console.log(original)
console.log(duplicate)