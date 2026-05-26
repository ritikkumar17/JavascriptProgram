// 9. Truncate String

let str = "JavaScript is awesome"
let limit = 10

if(str.length > limit){
    console.log(str.slice(0,limit) + "...")
}else{
    console.log(str)
}