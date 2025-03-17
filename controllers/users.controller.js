const {validationResult} = require("express-validator")
let users = require("../data/usersData")

const getAllUsers =   (req, res) => {
    res.status(200).json(users)
}

const getSinglrUser = (req, res) => {
    const userId = +req.params.userId
    const user = users.find((user) => user.id === userId)
    if (!user) {
        res.status(404).json({"error":"user not found !"})
    }
    res.status(200).json(user)
}

const addUser = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({"error":errors.array()})
    }
    const user = req.body
    users.push({"id":users.length + 1, ...user})
    res.status(201).json(users)
}

const updateUser = (req, res) => {
    const userId = +req.params.userId
    let user = users.find((user) => user.id === userId)
    if (!user) {
        res.status(404).json({"error":"user not found !"})
    }
    user = {...user, ...req.body}
    res.status(200).json(users)
}

const deleteUser = (req, res) => {
    const userId = +req.params.userId
    users = users.filter((user) => user.id !== userId)
    res.status(200).json({success:true})
}

module.exports = {
    getAllUsers,
    getSinglrUser,
    addUser,
    updateUser,
    deleteUser
}