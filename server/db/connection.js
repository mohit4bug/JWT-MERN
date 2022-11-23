const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/JWT", {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to the database.")
    })
    .catch((e) => {
        console.log(`Database error ${e}`)
    })