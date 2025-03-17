const express = require("express")
const userRouter = require("./routes/users.route")

const app = express()
const port = 5000

//middleware code
app.use('/',(req, res, next) => {
    console.log(`[*] ${req.method} cume ...`)
    next()
})

app.use(express.json())

app.use('/api/users', userRouter)

//run server code
app.listen(port, (req, res) => {
    console.log(`listening to port ${port} ...`)
})