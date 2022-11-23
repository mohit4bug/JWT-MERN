const userModel = require("../model/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const Register = async (req, res) => {

    const isUser = await userModel.findOne({
        email: req.body.email
    })
    if (!isUser) {

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        const newUser = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        try {

            const savedUser = await newUser.save()
            res.status(201).json("user created!")

        } catch (error) {

            res.status(500).json("something went wrong!")

        }
    }
    else {
        res.status(403).json("user already exists!")

    }

}

const Login = async (req, res) => {

    const isUser = await userModel.findOne({
        email: req.body.email
    })

    if (isUser) {

        const isValid = bcrypt.compare(req.body.password,isUser.password)
        if(isValid){

            const token = jwt.sign({id:isUser._id},"secret123")
            res.status(201).cookie("key",token).json("user logged in!")
        }
        else{
            res.status(401).json("email or password is incorrect!")
        }

    }
    else {
        res.status(404).json("user does not exists!")
    }

}


module.exports = { Login, Register }