import React, { useState } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="register-card bg-white p-4 shadow-lg rounded-lg">
          {isLogin ? (
            <Login toggleForm={toggleForm} />
          ) : (
            <Signup toggleForm={toggleForm} />
          )}
        </div>
      </div>
    </div>
  );
}

