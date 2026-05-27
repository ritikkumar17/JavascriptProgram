// 1. Tea Making Program

function boilWater(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
           res(" water boiled")
        }, 2000);
    })
}
// boilWater().then((res)=>{console.log(res)})

async function result(){
    let output = await boilWater()
    console.log(output)
}
result()