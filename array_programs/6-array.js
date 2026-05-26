// 6 fIND EVEN AND ODD NUMBER   

let num = [ 1,2,3,4,5,6,7,8,9,10]
let even =[]
let odd =[]

num.forEach((n)=>{
     if(n%2===0){
        even.push(n)
    }else{
        odd.push(n)
    }
})

console.log(even)
console.log(odd)