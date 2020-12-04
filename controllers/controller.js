import { v4 as uuidv4 } from 'uuid';  // id generator

// data container 

var users =[
    {
        "name": "Amol Sankpal",
        "subject": "OC",
        "age": 40
    },
    {
        "name": "Samana Jafri",
        "subject": "BDA",
        "age": 34
    },
    {
        "name": "Awij Shaikh",
        "subject": "MCOM",
        "age": 40
    },
]


export const getUsers = (req,res,next) => {
   res.send(users)
}

export const addUser = (req,res,next) => {
    const newUser = req.body
    users.push({id : uuidv4(), ...newUser })
    res.send(`User added : ${newUser.name} teaches ${newUser.subject}`)
}

export const getUser = (req,res,next) => {
    const id = req.params.id
    const thatUser = users.filter((u)=> u.id === id)
    res.send(thatUser)
}

export const deleteUser = (req,res,next) => {
    const id = req.params.id
    users = users.filter((u)=> u.id !== id)
    res.send(`User with id : ${id} is deleted`);
}

export const updateUser = (req,res,next) => {
    const id = req.params.id
    const thatUser = users.find((u)=> u.id === id)

    if (req.body.name) {
        thatUser.name = req.body.name
    }
    if (req.body.age) {
        thatUser.age = req.body.age
    }
    if (req.body.subject) {
        thatUser.subject = req.body.subject
    }
    res.send(` User with id : ${id} updated `)
}