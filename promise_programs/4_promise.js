// 4 promise chaining

function makeDough(){
    return new Promise((resove,reject)=>{
        setTimeout(()=>{
            resove("Dough bnn gya");
        },1000)
    })
}
function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(dough +" pizza bake huva")
        },1000)
    })
}

function servePizza(pizza){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(pizza +" pizza serve huva")
        },1000)
    })
}

makeDough()
.then((result)=>{
    console.log(result)
    return bakePizza(result)
})
.then((result)=>{
    console.log(result)
    return servePizza(result)
})
.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err)
})
