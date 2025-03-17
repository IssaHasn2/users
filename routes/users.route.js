const express = require("express")
const userRouter = express.Router()
const usersController = require("../controllers/users.controller")
const validationSchema = require("../middlewares/validationSchema")

userRouter.route("/" )
    .get(usersController.getAllUsers)
    .post( validationSchema , usersController.addUser)

userRouter.route("/:userId")
    .get(usersController.getSinglrUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

module.exports = userRouter