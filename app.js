const express = require("express")
const rwoController = require("./controllers/rwo")
const app = express()

const HOST = "127.0.0.1"
const PORT = "5000"

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))
rwoController(app)

app.listen(PORT, HOST, () => {
  console.log(`Listening @ ${HOST}:${PORT}`)
})
