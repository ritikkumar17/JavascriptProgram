// Floyd Triangle

let count = 1;

for (let i = 1; i <=4; i++){
    let str =""
    for(let j = 1; j<=i; j++){
        str += count +" "
        count++
    }
    console.log(str)
}