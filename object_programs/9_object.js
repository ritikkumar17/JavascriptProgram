// 9 compare two object of array

const arr1 = [
    { id: 1, name: "ritik" },
    { id: 2, name: "mohit" }
]

const arr2 = [
    { id: 1, name: "ritik" },
    { id: 2, name: "mohit" }
]

const result =
    JSON.stringify(arr1) === JSON.stringify(arr2)

console.log(result)