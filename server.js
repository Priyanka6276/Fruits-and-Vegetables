require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000

const reactViews = require("express-react-views") // allows the jsx file to be viewed
const mongoose = require("mongoose") //API that lets you talk to mongodB
const methodOverride = require('method-override')
const fruitsController = require("./controllers/fruitController")
const vegetablesController = require("./controllers/vegetableController")

mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
  console.log("connected to mongo")
})

// console.log(process.env.MONGO_URI)

app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine()) // this engine deals with the jsx

//Middleware
app.use((req,res,next) => { // runs before the below. runs between req and res
  console.log("I'm running for all routes")
  console.log("1.middleware")
  next()
})

app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'


//====== Routes ======
app.use("/fruits", fruitsController)
app.use("/vegetables", vegetablesController)



//props allows a compnent to receive fata from its parent



app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
})



/**If an error shows because of strict mode
 * const express = require("express")
const app = express()
const PORT = 3000
const fruits = require("./models/fruits")
const reactViews = require('express-react-views')

app.use(express.static("public "))
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())


app.get("/", (req, res) => {
  res.send(fruits)
})

app.get("/:indexOfFruit", (req, res) => {
  // res.send(fruits[req.params.indexOfFruit])
  res.render("Show", fruits[req.params.indexOfFruit]) <======================================

})


app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
});
 */