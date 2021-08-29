const express = require("express")
const helmet = require("helmet")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const config = require("./config.js")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

dotenv.config()
const PORT = process.env.PORT || 5001

const app = express()

const mongoString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wcf9h.mongodb.net/CyberSecWebsiteTestDb?retryWrites=true&w=majority`

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on("error", function (error) {
    if (process.env.NODE_ENV === "development") {
        console.log(error)
    }
})

mongoose.connection.on("open", function () {
    console.log("Connected to MongoDB database.")
})

app.use(helmet())
app.use(cors({
    origin: process.env.NODE_ENV === "development" ? config.devAdminURL : /admin.example.com$/,
    credentials: true
}))
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }))

app.use(cookieParser())
app.use(require("./routes/admin-user/index.js"))
app.listen(PORT, function () {
    console.log(`Express app listening on port ${PORT}`)
})