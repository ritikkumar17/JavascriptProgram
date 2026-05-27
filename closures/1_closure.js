// lexical scope example
// function outer(){
//     name = "ritik";

//     function inner(){
//         console.log(name)
//     }
//     inner();
// }
// outer()



//2 (Basic) closure

function outer(){
  let count = 0;

  function inner(){
    count++
    console.log(count);
  }
  
  return inner
}

let result = outer()
result()
result()
result()
