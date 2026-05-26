//11. First Non-Repeating Character

let str = "aabbcddee"

let obj = {}

// Step 1 -> Count characters
for(let ch of str){
    
    if(obj[ch]){
        obj[ch]++
    }
    else{
        obj[ch] = 1
    }
}

console.log(obj)

// Step 2 -> Find first non-repeating
for(let ch of str){

    if(obj[ch] === 1){
        console.log("First Non-Repeating Character is:", ch)
        break
    }
}