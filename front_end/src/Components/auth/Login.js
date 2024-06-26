import React, { useState } from 'react'
import { BASE_URL } from '../../utils/configs';
import Cookies from 'js-cookie';

const Login = ({ setShowLoginForm }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password
    }

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })

      if(response.status == 200 || response.status == 201 || response.ok) {
      const data = await response.json()
      Cookies.set("token", data.token, {expires: 1})
      window.location.reload()
    } else {
      alert("Could not login, Incorrect email or password!!")
    }
    } catch (error) {
      alert(error.message)
    }

  }

  return (
    <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
          <p className='text-center'>No account yet? <a href='#' onClick={() => setShowLoginForm(false)}>Register</a></p>
        </form>
      </div>
  )
}

export default Login