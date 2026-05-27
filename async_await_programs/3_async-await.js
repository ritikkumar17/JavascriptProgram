//3 ATM Program using async/await

function withdrawMoney(balance, amount) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (balance >= amount) {
                resolve("Money Withdrawn")
            } else {
                reject("Insufficient Balance")
            }
        }, 2000)

    })
}


async function atm() {
    try {
        let result = await withdrawMoney(5000, 2000)
        console.log(result)
    } catch (err) {
        console.log(err)
    } finally {
        console.log("Transaction Complete")
    }
}

atm()