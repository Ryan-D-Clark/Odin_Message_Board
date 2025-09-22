const path = require("node:path")
const express = require("express")
const app = express()
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true })) 
const PORT = process.env.PORT || 8080
app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log(`My first Express app - listening on port ${PORT}!`)
})

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleDateString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleDateString()
  }
]

app.get("/", (req, res) => {
  res.render("index", {messages:messages });
});

app.get("/new", (req, res) => {
  res.render("form")
});

app.post("/new", (req, res) =>{
    messages.push({text: req.body.messageForm, user: req.body.authorForm, added: new Date().toLocaleDateString()})
    res.redirect("/")
})

app.get("/message/:id", (req, res) => {
  res.render("message", {message: messages[req.params['id']]})
})