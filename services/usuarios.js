const UserModel = require('../models/usuario');

class User {
    async getUsers(req, res, next){
        const users = await UserModel.find();
        res.json({
            count: users.length,
            users
        })
    }

    async getUser(req, res, next){
        let { id } = req.params
        let user = await UserModel.findById(id)

        res.json(user)
    }
    async createUser(req,res, next){
        const newUser = new UserModel({
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            preferences: req.body.preferences
        })

        await newUser.save();

        res.json({
            message: "User created"
        })
    }
    async updateUser(req, res, next){
        let {id} = req.params
        let updatedUser = await UserModel.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        res.json({
            message: "User updated",
            updatedUser
        })
    }
    async deleteUser(req, res, next){
        let {id} = req.params;
        await UserModel.findByIdAndRemove(id)
        res.json({
            message: "User Deleted"
        })
    }
}

module.exports = User;