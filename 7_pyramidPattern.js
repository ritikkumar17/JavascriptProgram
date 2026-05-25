for(let i=1; i<=5; i++){
    let str = ""
    for(let k =1; k<=5-i; k++){
        str += " "
    }
    for(let j = 1; j<=i; j++){
        str += "*"
    }
    for(let m =2 ; m<=i; m++){
        str += "*"
    }
    console.log(str)
}
