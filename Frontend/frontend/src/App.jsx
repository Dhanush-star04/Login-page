import React from 'react';
import "./App.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePass(event) {
    setPass(event.target.value);
  }

  // Simple frontend validation - runs before we even call the backend
  function validate() {
    if (!email || !pass) {
      setError('Please fill in both fields');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (pass.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }

    setError('');
    return true;
  }

  function check(event) {
    event.preventDefault();

    if (!validate()) {
      return; // stop here, don't call the backend on bad input
    }

    axios.post("http://localhost:5000/login", { email, password: pass })
      .then(function (data) {
        if (data.data === true) {
          navigate('/sucess');
        } else {
          navigate('/fail');
        }
      });
  }

  return (
    <div className="body">
      <div className="wrapper">
        <form onSubmit={check}>
          <div>
            <h1 className="brand">Login</h1>

            {error && <div className="error-box">{error}</div>}

            <div className="input-box">
              <input
                type="email"
                onChange={handleEmail}
                name="email"
                placeholder="Email"
              />
              <i className="bx bx-user"></i>
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                onChange={handlePass}
                placeholder="Password"
              />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password</a>
            </div>

            <button type="submit" className="btn">Login</button>

            <div className="register-link">
              <p>Don't have an account <a href="#">Register</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;