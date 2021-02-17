const express = require("express")
const rwoController = require("./controllers/rwo")
const app = express()

//HOST, PORT

app.set("view engine", "ejs")
app.use(express.static("./public"))
rwoController(app)

app.listen(3000)
console.log("3000 port")
