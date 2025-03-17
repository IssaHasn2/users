const {body} = require("express-validator")

const validationSchema =  [
    body('username')
        .notEmpty()
        .withMessage("user name required ...")
        .isLength({min:3})
        .withMessage("username must be at least 3 chars ...")
    ,body("email")
        .isEmail()
        .withMessage("please enter corect email ...")
    ,body("passw")
        .isLength({ min: 6 })
        .withMessage("password must be at least 6 chars ...")
]

module.exports = validationSchema