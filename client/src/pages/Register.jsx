import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"
import axios from "axios"

const Register = () => {


    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("http://localhost:8000/register", {
                username, email, password
            })
            window.alert(res.data)
        } catch (error) {
            window.alert(error.response.data)
        }

    }

    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <input onChange={e => setUsername(e.target.value)} type="text" placeholder='Enter Username' name='username' required />
                <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter Email' name='email' required />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter Password' name='password' required />
                <button type="submit">Register</button>
                <Link to="/login">Login?</Link>
            </form>
        </div>
    )
}

export default Register