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
        subject: req.body.subject,
        age: req.body.age,
    });
    newUser
        .save()
        .then(() => console.log("new user added"))
        .catch((err) => console.log(err));
    res.send(`New User added: ${newUser.name}`);
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
                age: req.body.age,
                subject: req.body.subject,
            }
        )
            .then(() => {
                res.send(` User with id : ${id} updated `);
            })
            .catch((err) => console.log(err));
    });
};
