// 2 Pizza Workflow

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


async function cookPizza(){
    try{
        let dough = await makeDough()
        console.log(dough)

        let baked = await bakePizza(dough)
        console.log(baked)

        let served = await servePizza(baked)
        console.log(served)


    }catch(err){
        console.log(err)
    }
    finally{
        console.log("cooking process complete")
    }
}


cookPizza()