const express = require("express")
const app = express()
const port = 8000
require("./db/connection")
const authRoute = require("./routes/auth")
const cors = require("cors")
const cookieParser = require('cookie-parser')


// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
    credentials: true
}))

// Routes
app.use("/", authRoute)


app.listen(port, () => {
    console.log(`Server Up http://localhost:${port}`)
})