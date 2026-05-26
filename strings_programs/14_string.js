//  Flatten CamelCase to Words

let str = "helloWorldJavascript"

let result = str.replace(/[A-Z]/g, " $&")

console.log(result)