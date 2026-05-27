// Find Object in Array

const user=[
    {id:1 , name:"ritik"},
    {id:2 , name :"money"}
]

const data = user.find((d)=> d.name==="ritik" && d.id===1)
console.log(data)