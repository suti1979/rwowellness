const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const config = require("config")

const dbName = config.get("Database.name")
const dbPsw = config.get("Database.password")

let dateShow = new Date()
dateShow.setDate(dateShow.getDate() - 2)

//Connect ot database
mongoose.connect(
  `mongodb+srv://${dbName}:${dbPsw}@cluster0.vpjd4.mongodb.net/<dbname>?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)

//crate schema
const todoSchema = new mongoose.Schema({
  user: String,
  date: { type: Date, default: Date.now },
  personNumber: { type: Number, min: 1, max: 9, default: 1 },
  duration: { type: Number, min: 10, max: 120, default: 60 },
})

const Todo = mongoose.model("Todo", todoSchema)

const urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = (app) => {
  app.get("/rwo", (req, res) => {
    //get data from mongodb
    Todo.find({ date: { $gt: dateShow } }) //greater than $gt
      .sort({ date: "asc" })
      .exec((err, data) => {
        if (err) throw err
        res.render("rwo", { todos: data })
      })
  })

  app.post("/rwo", urlencodedParser, (req, res) => {
    // get data from view and add to mongodb
    Todo(req.body).save((err, data) => {
      if (err) throw err
      res.json(data)
      console.log(`Added one item: ${data}`)
    })
  })

  app.delete("/rwo/:user", (req, res) => {
    // delete requestred item from mongodb
    Todo.find({ _id: req.params.user }).deleteOne((err, data) => {
      if (err) throw err
      res.json({ todos: data })
    })
  })
}
