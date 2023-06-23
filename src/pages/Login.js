import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()
    if (!validateEmail(formData.email)) {
      alert('Invalid email address')
      return
    }
    if(!validatePassword(formData.password)){
      alert("Password should be more than 8 characters long.")
      return
    }
    navigate('/dashboard')
    console.log(formData)
  }

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }
  function validatePassword(password){
    if (password.length < 8){
      return false
    }
    return true
  }

  return (
    <div className="container">
      <form className="form">
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="button" type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}
