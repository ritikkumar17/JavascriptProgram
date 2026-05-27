function bankAccount(){
    let balance = 1000;

    return {
         deposit(amount){
            balance += amount;
            console.log(balance)
        },
    
          withdraw(amount){
            balance -= amount;
            console.log(balance)
        }
    } 
}

const user = bankAccount()
user.deposit(500)
user.withdraw(200)