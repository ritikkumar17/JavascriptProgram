// get

async function getUsers(){
    try{
       let response = await fetch("https://jsonplaceholder.typicode.com/users")
       let data = await response.json()
       console.log(data)
    }catch(err){
       console.log(err)
    }

 }
 
 getUsers()

 // Post
 async function createPost() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "React",
                    body: "Learning MERN",
                    userId: 1
                })
            }
        )
        let data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

createPost()


 // put
 async function updateUser(){
    try{
       let response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
          {
             method:"PUT",
             headers:{
                "Content-Type":"application/json"
             },

             body: JSON.stringify({
                name:"Ritik",
                city:"Delhi"
             })
          }
       )
 
       let data = await response.json()
       console.log(data)
    }catch(err){
       console.log(err)
    }
 }
 
 updateUser()

 //delete

 async function deletePost() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "DELETE"
            }
        )
        let data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

deletePost()