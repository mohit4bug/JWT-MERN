import React, { useEffect } from 'react'
import { useCookies } from "react-cookie";
import jwt from "jwt-decode"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const cookies = useCookies();
  const navigate = useNavigate()

  useEffect(() => {
    const token = cookies[0].key
    try {
      jwt(token);
    } catch (error) {
      navigate("/login")
    }
  })
  return (
    <div>Home</div>
  )
}

export default Home