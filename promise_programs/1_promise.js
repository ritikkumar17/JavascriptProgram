function orderFood(){
    return new Promise((resolve,reject)=>{
        let order ="successfull"

        if(order =="successfull"){
            setTimeout(()=>{
                resolve("Pizza Delived")
            },2000)
        }
        else{
            setTimeout(()=>{
                reject("Dekivery Failed")
            },2000)
            
        }
    })
}

orderFood().
then((res)=>{console.log(res)})
.catch((err)=>{console.log(err)})





// 1. Fake Food Delivery Promise
// Program Definition

// Ek function banao orderFood() naam ka.

// Agar order successful ho toh Promise resolve kare:
// "Pizza Delivered"
// Agar fail ho toh Promise reject kare:
// "Delivery Failed"

// 2 second delay use karo.

// Expected Output
// Success case:  Pizza Delivered
// Fail case:   Delivery Failed