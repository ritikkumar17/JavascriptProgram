//4 User Fetch Program using async/await

function getUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve({
                id: 1,
                name: "Ritik"
            })

        }, 2000)

    })

}


async function fetchUser() {

    try {

        let user = await getUser()

        console.log(user.name)

    } catch (err) {

        console.log(err)

    }

}

fetchUser()