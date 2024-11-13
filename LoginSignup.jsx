import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="form-container">
        {isLogin ? (
          <div className="form login">
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Username" required/>
              <input type="password" placeholder="Password" required/>
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <button onClick={toggleForm}>Sign Up</button>
            </p>
          </div>
        ) : (
          <div className="form signup">
            <h2>Sign Up</h2>
            <form>
              <input type="text" placeholder="Username" required/>
              <input type="email" placeholder="Email" required/>
              <input type="password" placeholder="Password" required/>
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account? <button onClick={toggleForm}>Login</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
