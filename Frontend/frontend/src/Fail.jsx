import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Fail.css";

export default function Fail() {
  const navigate = useNavigate();

  return (
    <div className="result-page fail-page">
      <div className="result-card">
        <div className="icon fail-icon">✕</div>
        <h1>Login Failed</h1>
        <p>The email or password you entered is incorrect.</p>
        <button className="result-btn" onClick={() => navigate('/')}>
          Try Again
        </button>
      </div>
    </div>
  );
}