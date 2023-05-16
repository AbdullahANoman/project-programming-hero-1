import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('')
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)

    const from = location.state?.from?.pathname || '/'
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target ;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess('');
        setError('')
        // console.log(password,email)
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            navigate(from, {replace:true})
            setSuccess('User logged in successfully')
        }).catch(error=>{
            setError(error.message)
        })
    }
  return (
    <div className="">
      <form onSubmit={handleLogin}>
        <div className="form-container">
          <h4 className="form-title">Login</h4>
          <p>Email</p>
          <input className="form-input" type="email" name="email" />
          <p>Password</p>
          <input className="form-input" type="password" name="password" />
          <input className="form-submit" type="submit" value="Login" />
          {
            error && <p>{error}</p>
          }
          {
            success && <p>{success}</p>
          }
          <p className="bottom-tittle">
            New to Ema-john ?{" "}
            <Link to="/signUp">
              <span>Create New Account</span>
            </Link>{" "}
          </p>
          <p>
            <span className="border"></span>
            <span>or</span> <span className="border"></span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
