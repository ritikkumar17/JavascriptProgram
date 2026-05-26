// 9. Count Frequency of Elements
let arr =  [1,2,2,3,3,3]

let obj ={}

for(let i = 0; i<arr.length; i++){
    if(obj[arr[i]]){
        obj[arr[i]]++
    }else{
        obj[arr[i]]=1
    }
}

console.log(obj)