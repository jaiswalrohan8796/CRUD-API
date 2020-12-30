import { User } from "../models/model.js";

export const getUsers = (req, res, next) => {
    try {
        User.find().then((users => {
            res.send(users)
        }))
    } catch (err) {
        console.log(err.message)
    }
};

export const addUser = (req, res, next) => {
    const newUser = User({
        name: req.body.name,
        role: req.body.role,
        age: req.body.age,
        subjects: req.body.subjects,
        city: req.body.city
    });
    newUser
        .save()
        .then(() => res.send(`New User added: ${newUser.name}`))
        .catch((err) => console.log(err));
};

export const getUser = (req, res, next) => {
    const id = req.params.id;
    User.findById(id).then((user) => {
        res.send(user);
    });
};

export const deleteUser = (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
        .then((user) => {
            user.delete();
            res.send(` User : ${user.name} is deleted`);
        })
        .catch((err) => {
            console.log(err);
        });
};

export const updateUser = (req, res, next) => {
    const id = req.params.id;
    User.findById(id).then((user) => {
        User.updateOne(
            { _id: user._id },
            {
                name: req.body.name,
                role: req.body.role,
                age: req.body.age,
                subjects: req.body.subjects,
                city: req.body.city
            }
        )
            .then(() => {
                res.send(` User with id : ${id} updated `);
            })
            .catch((err) => console.log(err));
    });
};
