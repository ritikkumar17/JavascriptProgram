// 3 Merge Two objects

const user1 ={
    name:"ritik"
}

const user2={
    age:"24"
}

const mergeObj ={ ...user1 ,...user2}

console.log(mergeObj)
console.log(Object.keys(mergeObj).length)

//clone object (Shallow copy)
const userDetail={
    name:"ritik",
    age:24
};

const copy ={...userDetail}
copy.name="moneyKumar"
console.log(copy)
console.log(userDetail)


//Deep clone object

const userObj = {
    name:"ritik",
    address:{
        city:"Punjab"
    }
};

const copyObj =structuredClone(userObj)
copyObj.address.city="England"
console.log(copyObj)
console.log(userObj)