import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Sucess.css";

export default function Sucess() {
  const navigate = useNavigate();

  return (
    <div className="result-page success-page">
      <div className="result-card">
        <div className="icon success-icon">✓</div>
        <h1>Login Successful</h1>
        <p>Welcome back! You've signed in to your account.</p>
        <button className="result-btn" onClick={() => navigate('/')}>
          Go to Login
        </button>
      </div>
    </div>
  );
}