import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const res = await axios.post("http://localhost:8000/login", {
             email, password
        },{
          withCredentials:true
        })
        window.alert(res.data)
    } catch (error) {
        window.alert(error.response.data)
    }

}


  return (
    <div className='login'>
    <form onSubmit={handleSubmit}>
    <h1>Login</h1>
    <input onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter Email' name='email' required />
    <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter Password' name='password' required />
    <button type="submit">Login</button>
    <Link to="/register">Register?</Link>
    </form>
</div>
  )
}

export default Login