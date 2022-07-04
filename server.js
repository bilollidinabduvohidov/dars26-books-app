const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const { urlencoded } = require("body-parser")

const path = require("path")
const fs = require("fs")


const userRoutes = require("./src/routes/usersRouter")

// variable server application
const app = express()

// variable PORT
const PORT = process.env.PORT  || 4001

// Settings
app.use(express.json())
app.use(fileUpload())
app.use(urlencoded({extended: true}))
app.use(cors())

// Routes
app.use(userRoutes)


// save txt file
const books = ()=> { 
    JSON.parse(fs.readFileSync(path.join(__dirname, "books.txt")))
}

const comments = ()=> { 
    JSON.parse(fs.readFileSync(path.join(__dirname, "comments.txt")))
}

const users = ()=> { 
    JSON.parse(fs.readFileSync(path.join(__dirname, "users.txt")))
}

const fileSave = (product) =>{
    fs.writeFileSync(path.join(__dirname, "books.txt"), JSON.stringify(product))

    fs.writeFileSync(path.join(__dirname, "comments.txt"), JSON.stringify(product))

    fs.writeFileSync(path.join(__dirname, "users.txt"), JSON.stringify(product))
}

// the end


app.get("/", (req, res)=> {
  res.send("Salom")
})

app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))
